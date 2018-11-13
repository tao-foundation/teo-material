/* 
   TEO (https: //github.com/trustfarm/teo-material) will airdrop over ETC accounts and 
   

   - RPC is so-slow. so check offline blockchain parser.
   https: //github.com/ethereum/ecp

   Calculations :

   0.05 ETH <= ETH Balance <= 2000 ETH
   1 ETC <= ETC Balance <= 66666 ETC
   1 ~ 3333 : 0.5 x
   0~10: 0.5 x => 5 TEO Max.
   10~100: 0.4 x => 5 TEO + 36 TEO = 41 TEO Max.
   100~1000: 0.3 x => 5 TEO + 36 TEO + 270 TEO = 311 TEO Max.
   1000~2000: 0.2 x => 5 TEO + 36 TEO + 270 TEO + 200 TEO = 511 TEO Max.
   2000~: 0x => No Airdrop.

ETC Convert Ratio
1	    333	    0.015	4.995				    4.995
333	    3333	0.012	4.995	36			    40.995
3333	33333	0.009	4.995	36	270		    310.995
33333	66666	0.006	4.995	36	270	199.998	510.993
66666			0				0

*/

const net = require('net');
const fs = require('fs');
const snapdb = require('mongodb');

var MongoClient = require('mongodb').MongoClient;
var snapcollection = null;
var format = require('util').format;
var sleep = require('system-sleep');

// var process.hrtime()+= moment()
// var formatted = now.format('HH:mm:ss Z')
// const process.hrtime()+= new Date()


/* Log Timestamping :: code snippets
https://jsfiddle.net/trustfarm/nvvzgax1/4/
*/
Date.prototype.DDHHMMSSMS = function () {
    var dd = pad(this.getDate(), 2);
    var hh = pad(this.getHours(), 2);
    var mm = pad(this.getMinutes(), 2);
    var ss = pad(this.getSeconds(), 2);
    var ms = pad(this.getMilliseconds(), 3);
    
    return dd + '.' + hh + ':' + mm + ':' + ss + '.'+ ms;
};
function pad(number, length) {
    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }
    return str;
}


var DEBUG = (function () {
    var timestamp = function () { };
    timestamp.toString = function () {
        return "[LOGS " + (new Date()).DDHHMMSSMS() + "]";

    };

    return {
        log: console.log.bind(console, '%s', timestamp),
        error: console.error.bind(console, '%s', timestamp)
    };
})();

/* example 
    DEBUG.log("test logs");
    DEBUG.log("stdlog with ms timestamp");
    DEBUG.log("stderr with ms timestamp");

*/

console.error("Start Program: " + process.argv);
console.error("STD : Start Program: " + process.argv[2]);

sleep(1000);

// 요거 참조할것. 그냥 파싱.
// https://stackoverflow.com/questions/11874096/parse-large-json-file-in-nodejs
//

var path = require('path');
var BN = require('bignumber.js');
BN.config({ DECIMAL_PLACES: 40 });
//import BigNumber from 'bignumber.js';


const cmineth = process.argv[3] || "0"; // minimum coins in accounts
const cmultiplier = process.argv[4] || "1"; // multiplier for coins in accounts
const accperblock = process.argv[5] || "100000"; // ETH block

const cmaxeth = 66666;

// usage : node parser-4.js input.json [min-eth] [multiplier] [num_of_accounts_per_block] [output filename]

let snapshot = [];
let accounts_count = 0;
let accounts_checked = 0;

var gaddrs = [];
var gcount = 0;
var blkprocessed = 0;

var infile = process.argv[2];
// var input = fs.createReadStream(infile, { flags: 'r', encoding: 'utf-8' })
var outfile = process.argv[6];
var output = outfile ? fs.createWriteStream(outfile) : process.stdout;

var lastline = '';
var nTotal = 0;

var JSONStream = require('JSONStream');
var evts = require('event-stream');
const bn_1eth = new BN('1000000000000000000');
const bn_mineth = new BN(cmineth).times(bn_1eth); // minimum coins in accounts
const bn_maxeth = new BN(cmaxeth).times(bn_1eth); // minimum coins in accounts
const bn_mul = new BN(cmultiplier); // multiplier for coins in accounts


    // multiplication coin values in accounts.
    const bn_66666eth = new BN(66666).times(bn_1eth);
    const bn_33333eth = new BN(33333).times(bn_1eth);
    const bn_3333eth = new BN(3333).times(bn_1eth);
    const bn_333eth = new BN(333).times(bn_1eth);

    const bn_015 = new BN(0.015);
    const bn_012 = new BN(0.012);
    const bn_009 = new BN(0.009);
    const bn_006 = new BN(0.006);

    var TotalTEO = new BN(0);

const genesis_prefix_str = "  \"accounts\": {    \n\
\t\"0000000000000000000000000000000000000001\": { \"builtin\": { \"name\": \"ecrecover\", \"pricing\":        { \"linear\": { \"base\": 3000, \"word\": 0 } } } },    \n\
\t\"0000000000000000000000000000000000000002\": { \"builtin\": { \"name\": \"sha256\",    \"pricing\":        { \"linear\": { \"base\": 60,   \"word\": 12 } } } },   \n\
\t\"0000000000000000000000000000000000000003\": { \"builtin\": { \"name\": \"ripemd160\", \"pricing\":        { \"linear\": { \"base\": 600,  \"word\": 120 } } } },  \n\
\t\"0000000000000000000000000000000000000004\": { \"builtin\": { \"name\": \"identity\",  \"pricing\":        { \"linear\": { \"base\": 15,   \"word\": 3 } } } },    \n\
\t\"0000000000000000000000000000000000000005\": { \"builtin\": { \"name\": \"modexp\",    \"activate_at\": 0, \"pricing\": { \"modexp\": { \"divisor\": 20 } } } },   \n\
\t\"0000000000000000000000000000000000000006\": { \"builtin\": { \"name\": \"alt_bn128_add\", \"activate_at\": 0, \"pricing\":    { \"linear\": { \"base\": 500, \"word\": 0 } } } },     \n\
\t\"0000000000000000000000000000000000000007\": { \"builtin\": { \"name\": \"alt_bn128_mul\", \"activate_at\": 0, \"pricing\":    { \"linear\": { \"base\": 40000, \"word\": 0 } } } },   \n\
\t\"0000000000000000000000000000000000000008\": { \"builtin\": { \"name\": \"alt_bn128_pairing\", \"activate_at\": 0, \"pricing\":{ \"alt_bn128_pairing\": { \"base\": 100000, \"pair\": 80000 } } } },   \n\
},";

const genesis_prefix_strTN = "  \"accounts\": {    \n\
,";

fileStream = fs.createReadStream(infile, { encoding: 'utf8' });
fileStream.pipe(evts.through(function (data) {
        // console.log('print accounts object from file ::');
        // console.log(data);
        evts.pause();
        accountproc(data, this);
        return data;
    }, function end() {
        console.error('stream reading ended');
        console.log(`\t"0000000000000000000000000000000000000000": { "balance" : "0" , "ethbalance": "0" },\n  }\n`);
        console.log(`Total Account : ${nTotal} , TEO : ${TotalTEO.div(bn_1eth).toString(10,40)}`);
        this.emit('end');
    }))

    function accountproc(data, evts) {
    //DataModel.save(function (err, dataModel) {
        var chunks = lastline + String(data);
        // clear lastline
        lastline = "";

        lines = chunks.split('\n');
        // console.error(`chunks length ${chunks.length}, lines ${lines.length}`);
        for (var i = 0; i < lines.length ; i++) {
            // console.log(lines[i]);
            if ( lines[i].indexOf("state") > 0 ) {
                console.error(`${i} skip this line`);

                // template to add genesis file format.
                console.log(`  "AuxiliaryComments": { "minimumeth" : "${bn_mineth}", "min" : "${cmineth}" , "multiplier" : "${bn_mul}" },`)
                console.log(genesis_prefix_strTN);
                continue;
            }

            if (lines[i].indexOf("nonce") == -1)
            {
                // remain chunk to lastlinebuffer
                lastline = lines[i];
                // console.error(`LastLine ${i}/${nTotal} "${lastline.length}"`);
                //evts.resume();
                continue; 
            }

            // processing accounts and balance
            // console.log(lines[i]);
            // get accounts 
            var acc0 = lines[i].split(/"/)[0];
            var acc1 = lines[i].split(/"/)[1];
            var acc2 = lines[i].split(/"/)[2];
            var acc3 = lines[i].split(/"/)[3];
            var acc4 = lines[i].split(/"/)[4];
            var acc5 = lines[i].split(/"/)[5];

            // filter minimum coins in accounts.
            var bal = new BN(acc5 , 16);
            if (bal.isGreaterThan(bn_66666eth)) {
                console.error(`${nTotal} : ${bal} is > ${bn_maxeth} , skip this line`);
                continue;
            }
            if (bal.isLessThan(bn_1eth)) {
                console.error(`${nTotal} : ${bal} is < ${bn_mineth} , skip this line`);
                continue;
            }
            

            var newbal = new BN(0);
            var rembal = new BN(0);
            if (bal.isLessThanOrEqualTo(bn_333eth))
            {
                newbal = new BN(bal.multipliedBy( bn_015 )).integerValue();

            } else if (bal.isLessThanOrEqualTo(bn_3333eth)) {
                newbal = new BN(4.995).times(bn_1eth);
                rembal = bal.minus(bn_333eth);
            //console.error(`\t"balance" : ${bal.toString(16,40)}, ${rembal.div(bn_1eth).toString(10,40)}`);
                newbal = newbal.plus(rembal.multipliedBy(bn_012)).integerValue();
            //console.error(`\t"newbalance" : ${newbal.toString(16,40)}`);

            } else if (bal.isLessThanOrEqualTo(bn_33333eth)) {
                newbal = new BN(40.995).times(bn_1eth);
                rembal = bal.minus(bn_3333eth);
                newbal = newbal.plus(rembal.multipliedBy(bn_009)).integerValue();
            //console.error(`\t"balance" : ${bal.toString(16,40)}, ${rembal.div(bn_1eth).toString(10,40)}`);
            //console.error(`\t"newbalance" : ${newbal.toString(16,40)}`);
    
            } else if (bal.isLessThanOrEqualTo(bn_66666eth)) {
                newbal = new BN(310.995).times(bn_1eth);
                rembal = bal.minus(bn_33333eth);
                newbal = newbal.plus(rembal.multipliedBy(bn_006)).integerValue();
            //console.error(`\t"balance" : ${bal.toString(16,40)}, ${rembal.div(bn_1eth).toString(10,40)}`);
            //console.error(`\t"newbalance" : ${newbal.toString(16,40)}`);
            }
            
            var ethval = bal.div(bn_1eth);
            BN.config({ DECIMAL_PLACES: 35 });

            console.log(`\t"${acc1.substring(2)}": { "balance" : "${newbal.toString(16,40)}", "dec" : "${newbal.div(bn_1eth).toString(10,40)}" , "orgdecbal": "${ethval.toString()}" },`);
            // from 47 col, start balance

            if ( (++nTotal) % 10000 == 0 ) console.error(`processed ${nTotal}`);

            TotalTEO = TotalTEO.plus(newbal);
        }

        evts.resume();
    //});
    }

