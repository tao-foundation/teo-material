/* 
   TEO (https: //github.com/trustfarm/teo-material) 
   will airdrop over 5.2M ETH accounts and ETC 251K accounts
   
   - RPC is so-slow. make offline blockchain parser.
     refer https://gist.github.com/neuhaus/7387edf411513a9f11f1242dcec8d62e
*/

"use strict";

const net = require('net');
const fs = require('fs');
const snapdb = require('mongodb');

const fsext = require('fs-extra');
const rls = require('readline-sync');

var fileStream = require('fs');

var path = require('path');
var MongoClient = require('mongodb').MongoClient;
var format = require('util').format;
var sprintf = require("sprintf-js").sprintf,
    vsprintf = require("sprintf-js").vsprintf;
var sleep = require('system-sleep');

const EthAccounts = require('web3-eth-accounts');
const web3utils = require('web3-utils');
const teoaccounts = new EthAccounts();
var JSONStream = require('JSONStream');
var evts = require('event-stream');
const Tx = require('ethereumjs-tx');
var BN = require('bignumber.js');
BN.config({
    DECIMAL_PLACES: 40
});

const Web3 = require('web3');
let web3 = new Web3();
// const teo_ipcPath = "\\\\.\\pipe\\jsonrpc.ipc";
const teo_ipcPath = "\\\\.\\pipe\\jsonrpc-100.ipc";
//web3.setProvider(new web3.providers.HttpProvider("http://localhost:8546"));
//web3.setProvider(new web3.providers.IpcProvider(par0_ipcPath, net));
web3.setProvider(new web3.providers.IpcProvider(teo_ipcPath, net));

//import BigNumber from 'bignumber.js';

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

/* command line parsing */
var infile = process.argv[2];
const startnonce = parseInt(process.argv[3]) || 0; // off tx start nonce
const endnonce = process.argv[4] || 10000000; // off tx max account counts
var logoutfile = process.argv[5]; // OffTX send log output file

// usage : node sender.js offtxlist.json [startnonce] [maxnonce] [logoutfile]

var logoutfd = logoutfile ? fs.createWriteStream(logoutfile) : process.stdout;

var lastline = '';
var nTotal = 0;
var Nonce = 0;
var sleeptime = 100;
var nsamehash = 0;
var nsendhash = 0;

var txarray = new Array();
var txidx = 0;

var txstuckcnt = 20;
var txstuckloop = 0;

fileStream = fs.createReadStream(infile, { encoding: 'utf8' });
fileStream.pipe(evts.through(function (data) {

        evts.pause();

        if (Nonce > endnonce) {
            this.emit('end');
            return data;
        }

        //console.log('print offtx string from file ::');
        //console.log(data);

        accountproc(data, this);
        return data;
    }, function end() {
        console.error(`stream reading ended, Last Nonce ${Nonce-1}`);
        
        this.emit('end');
        if (logoutfile) logoutfd.end();
    }));

    
    function accountproc(data, evts) {
    //DataModel.save(function (err, dataModel) {
        var chunks = lastline + String(data);
        var lines;
        // clear lastline
        lastline = "";
        
        
        lines = chunks.split('\n');
        // console.error(`chunks length ${chunks.length}, lines ${lines.length}`);
        for (var i = 0; i < lines.length ; i++) {
            // console.log(lines[i]);

            // check line buffer has enough tx data
            if ( (lines[i].indexOf("Z") == -1) || ( lines[i].length < 240) )
            {
                // remain chunk to lastlinebuffer
                lastline = lines[i];
                // console.error(`Chunk LastLine ${i}/${nTotal} "${lastline.length}"`);
                continue;
            }

            // processing accounts and balance
            // console.log(lines[i]);
            // get accounts 
            var acc0 = lines[i].split(" ")[0];
            var acc1 = lines[i].split(" ")[1];
            var acc2 = lines[i].split(" ")[2];
            var acc3 = lines[i].split(" ")[3];
            
            /*
            console.log(`acc0 : ${acc0}`);
            console.log(`acc1 : ${acc1}`);
            console.log(`acc2 : ${acc2}`);
            console.log(`acc3 : ${acc3}`);
            */

            Nonce = parseInt(acc1);

            if (Nonce > endnonce) {
                logoutfd.write(`${Nonce} > ${endnonce} finish sending\n`);
                return;
            }

            if (Nonce < startnonce) {
                if (Nonce % 1000 == 0 ) logoutfd.write(`${Nonce} < ${startnonce} skip position\n`);
                continue;
            }

            var offtx = acc0;
            txarray[txidx%(txstuckcnt+4)] = offtx; txidx++;

            //DEBUG.error(`N:${Nonce}, nTot:${nTotal}`);
            // web3.eth.sendRawTransaction('0x' + serializedTx.toString('hex'), function (err, hash) {
            web3.eth.sendSignedTransaction('0x' + offtx, function (err, hash) {
                if (err)
                {
                    if (err.toString().indexOf("imported")) {
                        sleeptime = 20;
                    }
                    nsamehash++;

                    var wbuffer = sprintf("N:%d Err:CB: nSH/nSN/nTot[%d/%d/%d] S.Time[%d] %s", Nonce, nsamehash, nsendhash, nTotal + 1, sleeptime, err);
                    //DEBUG.error(wbuffer);
                    //logoutfd.write(wbuffer);
                }
                else
                {
                    nsendhash++;
                    var wbuffer = sprintf("N:%d nSH/nSN/nTot[%d/%d/%d] Hash:CB: %s", Nonce, nsendhash, nsamehash, nTotal + 1, hash);
                    sleeptime = 60;
                    DEBUG.error(wbuffer);
                    //logoutfd.write(wbuffer);
                }
            });
            
            /*
            .on('transactionHash', function (txhash) {
                    var wbuffer = sprintf("%d : Hash %s \n", Nonce, txhash);
                    console.error(wbuffer);
                    logoutfd.write(wbuffer);
                })
            */

            sleep(sleeptime);

            if ( (++nTotal) % 1000 == 0 ) {
                DEBUG.error(`processed ${nTotal} : nonce: ${Nonce} , (SUM) ${nsendhash+nsamehash}, nSH/nSN: ${nsamehash}/${nsendhash} `);
                sleep(500);
            }
            
            if ((nTotal - (nsendhash + nsamehash)) > txstuckcnt ) {
                DEBUG.error(`BigDifferences nonce: ${Nonce} , ${nTotal} and (SUM) ${nsendhash+nsamehash}, nSH/nSN: ${nsamehash}/${nsendhash} `);
                sleep(2000);
	    if ( ++txstuckloop == 4) {
		// resend stucked node. 
		txstuckloop = 0;
		var errcnt = 0;

	            DEBUG.error(`resending recent TX cnt : ${txstuckcnt} `);

		for (var j = 0; j < (txstuckcnt +4) ; j++) {
			// renew the web3 provider and resend recent txs
			// delete web3;
			web3.setProvider(new web3.providers.IpcProvider(teo_ipcPath, net));
			web3.eth.sendSignedTransaction('0x' + txarray[j], function (err, hash) { if (err) { errcnt ++;  } else {hashcnt++; } });
			sleep(4);
		}
	    }
            }
        }

        evts.resume();
    //});
    }

