 # **TEO** (**T**rust**E**THre**O**rigin) Blockchain
<br>
 
## TEO (Proof of Work) blockchain is part of **TAO** Architectures.

 ### TEO Testnet Snapshot Extraction information 
 
 <br>


 - ETH snapshot blockheight : 5867000 , with 0.01 ETH minimum balanced accounts.

   Total Accounts snapshoted : 5,271,357 accounts.<br>
   You can check all snapshoted accounts information transparently with Text Editor after  unzip <br>
   [ETHSnapshot  .zip.001 ~ 009](https://github.com/trustfarm/teo-material/tree/master/snapshot-output) <br>
   
 - ETC snapshot blockheight : 6080000 , with 0.3 ETC minimum balanced accounts.

   Total Accounts snapshoted : 251,563 accounts.  It has burned DAO [HackersAccounts](https://gastracker.io/addr/0x5e8f0e63e7614c47079a41ad4c37be7def06df5a)
   You can check all snapshoted accounts information transparently with Text Editor after  gunzip <br>
   [ETCSnapshot  .gz](https://github.com/trustfarm/teo-material/blob/master/snapshot-output/ETC-6080000-0_3etc.json.gz) <br>


 - Output Examples

 ```json
{ "state": {
"0x4fe9367ef5dad459ae9cc4265c69b1b10a4e1288": {"balance": "2069e3c5b1d6800", "nonce": "0"},
"0x22113ab64092eefa96b93a1576da0c5ae2031707": {"balance": "66ee5f22f0d800", "nonce": "0"},
"0xcd5341646efa30389d28dfe8fb477a5f6cbd3b8e": {"balance": "2a1029a0d71000", "nonce": "0"},
 ```

  In case of ETH, that will be converted for more human readable formats.

  ```json
    /* conversion ratio : x 0.1 */
	"4fe9367ef5dad459ae9cc4265c69b1b10a4e1288": { "balance" : "33dc9fa2b62400", "dec" : "0.014597802" , "orgdecbal": "0.14597802" },
	"22113ab64092eefa96b93a1576da0c5ae2031707": { "balance" : "a4b09837e7c00", "dec" : "0.002897254" , "orgdecbal": "0.02897254" },
	"cd5341646efa30389d28dfe8fb477a5f6cbd3b8e": { "balance" : "434d0f67be800", "dec" : "0.001183972" , "orgdecbal": "0.01183972" },
  ```
   
   it is parsed and converted to followings::
   - "account" { address } : "balance" {hex converted balance} ,
   - "dec" : {decimal human readable balance} , 
   - "orgdecbal" : {human readable original balance}

 #### Converted Accounts informations location.
   
   <br>
   ETH balance multiplied with 0.1 <br>
   <br>
   [ETH-5867000-converted.zip.001~010](https://github.com/trustfarm/teo-material/blob/master/snapshot-output/converted/")<br>

   ETC balance multiplied with 0.003 <br>
   [ETC-6080000-converted.zip](https://github.com/trustfarm/teo-material/blob/master/snapshot-output/converted/ETC-6080000-converted.zip) <br>

 #### Conversion Scripts run with nodsjs

   <br>

   - Parsing and conversion <br>
   [snapshot-output/converted](https://github.com/trustfarm/teo-material/blob/master/snapshot-output/converted)

   <br>
   
   ```
   npm install
   node teo-snapshot-parser.js ..\ETH-5867000-0_01wei.json 0 0.1 10000000 > ETH-5867000-converted.json
   ```
<br>


 #### Converted Offline TX Airdrop Scripts run with nodsjs

<br>
  ETH Airdrop Offline TX archive <br>
   [eth-5867000-offtx-list.zip.001~027](https://github.com/trustfarm/teo-material/blob/master/snapshot-output/converted/offtx-send")<br>

<br>
  ETC Airdrop Offline TX archive <br>
   [etc-6080000-offtx-list.zip](https://github.com/trustfarm/teo-material/blob/master/snapshot-output/converted/offtx-send/etc-6080000-offtx-list.zip) <br>

<br>

  
   ```
   # install and run
   npm install
   node teo-snapshot-offtxsend.js eth-5867000-offtx-list.json 0 1000000 log.offtxsend.txt

   # node teo-snapshot-offtxsend.js [offtx-list json file]  [start tx nonce] [end tx nonce] [output log file]
   ```
  -- if there's sending error, you can retry it from errored position , and divide it with several times. <br>
  -- it is recommend multiple sending by several node servers. 

You can check your accounts, how many TEOt has airdroped, we prepared 2 kinds of  explorers for cross-checking.
<br>
[https://teoexplorer.tao.ac] , <br>
[https://explorer.tao.ac]

Please check and Review our projects and join.
