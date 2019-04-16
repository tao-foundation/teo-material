 # If you want to project history from TOP-down , first refer https://github.com/tao-foundation/tao-materials/ 
 
 <hr>
 
 # **TEO** (**T**rust **E**TH re **O**rigin) Blockchain
<br>
 
## TEO (Proof of Work) blockchain is part of **TAO** Architectures.

 ## **TAO** (Trust Astro Object) '도' '道' '到' <br>
 is huge blockchain architecture and co-operating the heterogeneous behavior of several blockchains. <br>
 all object in universe <br>
   - it has its own philosophy <br>
   - reason of existence <br>
   - its own way of doing <br>
   - its own lifecycle <br>
   
   All each blockchain have a their own properties , their own roles , strong points of functionalities, and lifecycle.<br>

### **Forum :: Latest Bounty and Discussion information**
You can more updated information and disscussion freely on [TAO Forum :: https://forum.tao.foundation](https://forum.tao.foundation "TAO Forum").
<br>
Please Join TAO Forum and share you opinions.

**We are ready to welcome and enough bounty programs for contributors.**

<br>


**TAO** Archicture aim to be a space to platform for each other blockchain's connections and co-operations, finally it will more good for solve scalablity issues of blockchain.<br>


## TEO is beginning of this TAO Architecture - [TAO.Foundation](https://tao.foundation)

### 1) TEO Mainnet Updates.
TEO Has On Live 00:12:25 +0900 AM 1st Nov, 2018.
You can check 1st Block in [Explorer](https://explorer.tao.foundation/block/1)

<br>

### 2) ETH/ETC Airdrop Snapshot Finished.

  - ETH 6660000 Block height Snapshot has finished. [You Can Snapshot file down and check text search](/20181110-Mainnet-ETH-ETC-Snapshot/ETC-6880000-snapshot)
  - ETC 6880000 Block height Snapshot has finished. [You Can Snapshot file down and check text search](20181110-Mainnet-ETH-ETC-Snapshot/ETH-6660000-snapshot)

  - Conversion Rate and min-Max Boundaries
    
    0.05 ETH <= ETH Balance <= 2000 ETH
    1 ETC <= ETC Balance <= 66666 ETC

    ETH Ratio (similar in ETC)
    - 0 ~ 10 : 0.5x => 5 TEO Max.
    - 10 ~ 100 : 0.4x => 5TEO + 36TEO = 41 TEO Max.
    - 100 ~ 1000 : 0.3x => 5TEO + 36TEO + 270TEO = 311 TEO Max.
    - 1000 ~ 2000 : 0.2x => 5TEO + 36TEO + 270TEO + 200TEO = 511 TEO Max.
    - 2000 ~ : 0x => No Airdrop.
    
    ETC Ratio
    - 1	~ 333		0.015x	=> 4.995 MAX			: 4.995 MAX
    - 333 ~ 3333	0.012x	=> 4.995 + 36			: 40.995 MAX
    - 3333 ~ 33333	0.009x	=> 4.995 + 36 + 270		: 310.995 MAX
    - 33333 ~ 66666	0.006x	=> 4.995 + 36 + 270 + 199.998	: 510.993 MAX
    - 66666			0				0

   **How to Check and Verify**
       
   - [20181110-Mainnet-ETH-ETC-Snapshot/ETC-6880000-snapshot/converted/](/20181110-Mainnet-ETH-ETC-Snapshot/ETC-6880000-snapshot/converted/) ,
    
   - [20181110-Mainnet-ETH-ETC-Snapshot/ETH-6660000-snapshot/converted/](/20181110-Mainnet-ETH-ETC-Snapshot/ETH-6660000-snapshot/converted/)  
    
   directory, 
   you can download converted files in zip.
   file format is looks like this::
    
```
     	"4fe9367ef5dad459ae9cc4265c69b1b10a4e1288": { "balance" : "1034f1e2d8eb400", "dec" : "0.07298901" , "orgdecbal": "0.14597802" },
	"c7337c0caded305251ee2b1a4358025b0d95d952": { "balance" : "6f05b6577ed7400", "dec" : "0.50000005" , "orgdecbal": "1.0000001" },
```
    
  above `4fe9367ef5dad459ae9cc4265c69b1b10a4e1288` account have a 
  `orgdecbal : 0.1459..` is original ETH balance, and that is converted TEO Airdrop value is `dec : 0.0729..` , `balance : 1034f...` 
    for hex value same as dec.
    
   You can download converting scripts file in same folder, and do change and test it as your own ratio. .js and .bat
  
  - [teo-snapshot-parser-eth.js](https://github.com/tao-foundation/teo-material/blob/master/20181110-Mainnet-ETH-ETC-Snapshot/ETH-6660000-snapshot/converted/teo-snapshot-parser-eth.js)
   
  - [teo-snapshot-parser-etc.js](https://github.com/tao-foundation/teo-material/blob/master/20181110-Mainnet-ETH-ETC-Snapshot/ETC-6880000-snapshot/converted/teo-snapshot-parser-etc.js)
    
  
  #### Snapshot and Converted Total Accounts and Airdrop Funds.
  
    - ETH : Total Account : 3_382_839 , TEO : 8_770_022.271718781925032
    - ETC : Total Account : 195_832 , TEO : 347_924.937234909552956473


**In case of exchange who listing TEO , We will negotiate same calculation on their customer funds and bounty for funds for customer airdrop.**

<br>

### 3) TEO Has Adapted TETHashV1 (Anti-ETH Asic) Algorithms.

 **TETHashV1** algorithm is most parts based on [ETHASH](https://github.com/ethereum/wiki/wiki/Ethash).
 [**EIP-1485 PR**](https://github.com/ethereum/EIPs/blob/7336cceac6c997252299a463ffe896a3414c479b/EIPS/eip-1485.md) on Ethereum EIP Proposal.
 You can refer another story in [here tao forum](https://forum.tao.foundation/topic/27/teo-premainnet-using-tethashv1-now-pre-live)

 On This time, PoW algorithm change to newer one, it needs crypto analysis and long time verification time and optimization time. 
 it's not suitable for prevent ASIC , so late!

However, in case of TEthashV1 (Trust Ethash Version1) has most of things are based on ethash, which is verified several years.
In Ethash MIX FNV part uses deprecated implementation (FNV-0) hash algorithm , So, if this is changed then more strong PoW algorithm based on ETHASH. 

Clearly, make obsolete the current ASIC miners too.

And, I also researching FPGA Mining, recent days of synthesizer (eg. Xilinx or Altera) it has tremendous optimization options and great synthesis abilities, So, Above reasons, it may be regular small parts of algorithm changing is more good for resist centralized mining and prevent ASICs.

In case of ASIC, at least 6 months needs, redesign and consumer products delivery.

Another My opinion on Ethash , is remove 64 rounds of Mix to decrease to 32 rounds.
decrease DAG Size or limit Max DAG Size, sustain current Memory accessing bw.

So, then cheaper or some years ago GPU also effective hash on PoW, and many miners can participates mining.

### 4) TEO Mainnet Pools and Explorer , Wallet and Own Developed Miner

Now, Above TethashV1 is appied on 
  - [TEO Mainnet Mining POOL1](https://pool1.tao.foundation) , [POOL2](https://pool1.tao.foundation)
  - [TEO Miner](https://github.com/tao-foundation/teominer/releases) and 
  - [rTEO parity forked client](https://github.com/tao-foundation/rteo)
  - [Tethashv1-Go-ethereum](https://github.com/tao-foundation/tethashv1-geth), 
  - [Open-TEO-Pool](https://github.com/tao-foundation/open-teo-pool)
  - [go-wrapper API TethashV1 for Pool](https://github.com/tao-foundation/tethashv1)
  - [TethashV1 cpp library (chfast/MariusVanDerWijden/ethash)](https://github.com/tao-foundation/teominer/tree/master/libethash)  
        it is insided in teominer/libethash

 also patched to new TEthashV1 algorithms for go-ethash wrapper , cpp ethash library.

And Explorer's are in 
  **https://teoexplorer.tao.foundation**  
  <br>

### 5) TEO Wallet for Mainnet
 
  **https://wallet.tao.foundation**   ,  it is compatible with **MyEtherWallet** and **Trezor** Wallet.
   <br>

#### This directory cotains TEO testnet materials archives.

### 6) TEO Blockchain Spec:

1. NetworkID : 0x8288 (MainNet) ,  0x8282 (TestNet)

2. PoW Algorithm : TEtHashV1 - New ANTI-ETHASIC , More Strong ETHASH algorithm.
    It will modified in future , for more doing a GPU mining.  <br> 

4. Block Rewards : 5 TEO - same as original ethereum.

5. SSZ Funds (쌈짓돈-Ssamzi-don(money)) : 0.5 TEO / Block  [**SSZ Funds** for Community , Following will be changed for more familiar with Community Activation and Marketing]
 
 - it is for funds for developers and used for contents owner's rewards , like a Musicoin and Steemit.<br>
first 0.5M blocks , it will owned by Devs and Founders, over 0.5M blocks it will be move to contents owners and community funds, ratio of 10%.<br>

    - eg 
    -  0     ~  0.5M  block : 0.50 [Dev] : 0     [community]
    -  0.5M  ~  1M    block : 0.45 [Dev] : 0.05  [community]
    -  1M    ~  1.5M  block : 0.40 [Dev] : 0.10  [community]
    -  1.5M  ~  2M    block : 0.35 [Dev] : 0.15  [community]
    -  2M    ~  2.5M  block : 0.30 [Dev] : 0.20  [community]
    -  2.5M  ~  3M    block : 0.25 [Dev] : 0.25  [community]
    -  3M    ~  3.5M  block : 0.20 [Dev] : 0.30  [community]
    -  3.5M  ~  4M    block : 0.15 [Dev] : 0.35  [community]
    -  4M    ~  4.5M  block : 0.10 [Dev] : 0.40  [community]
    -  4.5M  ~  5M    block : 0.05 [Dev] : 0.45  [community]
    -  5M    ~        T.B.D

<br>
Community Funds will be used with reward for contents creator, contents reviewer, contents querators.<br>
More detailed consensus will be updated, feedback from communities.<br>
<br>
Current Concept of Contents Rewards is for <br> 

| Creator  | Editor(Moderator) | Querator(Promotor) | Reader | Reserved(T.B.D) |
| :------------ | :------------ | :------------ | :------------ |:----------|
| 70%             | 10%            | 5%              | 1%              | 14%        |
<br>
Above table will be changed by community feedbacks and If contents rewards funds is shorten that what consuming, unit Contents Rewards will be shrink down to fit in Community Funds.


## More on **TAO** Archicture

   - It is not control whole things in one blockchain. <br>
From beginning pow chain will be leading, next phase, POS and POA chain will join , for doing a they have more good functionality feilds with each independent chains.<br>
and some other chain will be fork from each chains and they finished their roll, sink to parents chain.<br>

In TAO , solve the scalablity and storage and network traffic reduces by mainly concern of **lifecycle and lifetime of blockchain**.

Besides of PoW chain, in future, more lite chain will be implemented for very lite IoT devices.<br> [Refer . 2016.10 Prevent EVM Gas DDOS Idea](https://gist.github.com/trustfarm-dev/cbbc9aa1ab76983cb7dbaa329097c1c3 "2016.10 EVM Gas DDOS Idea"):  <br>

Because current EVM cannot fit on lite devices. I think more realistic approach is divide main chain and develop lite chain and lite application machine for lite IoT devices.<br>

for do that, SmartContract VirtualMachine will be developed direction with tightend to fit and run on small micom cpus. <br>

  - Base idea of acheive this, not using highly abstacted instruction set computer, but adapt real working cpu core instructions set machine. <br>
mainly considering instruction set is [RISCV](https://riscv.org/) machine or [OpenRISC](https://openrisc.io/)  instruction set machine is good candidates.<br>
There's no licenses and no IP risk instruction set machine will be adapted.<br>

- Second, in TAO adapt wide contents [blogging, music, UCC , forum, ...] archiving and rewarding platform. <br>
First Phase of Contents platform is begin with TEO (PoW) blockchain based system, Next Phase It will adapt backend blockchain with PoS or PoA based platform.<br> 
it is more strong feature do a less blocktime, transaction speed increase, save energy saving and good at DAPP services. <br>
But, Still blockchain security concerns compare than PoW blockchain.<br>
Idea of solving security vulnarabilities and Richier more Richier , Poorer more Poorer problem on PoS Based system.<br>
  - First approach is min-max stake balancing and more large counts of validator nodes, 
  - and wide spread and distribution of validator nodes which geo-location of physical nodes.<br> 
    * [Refer More Securen of DPoS Network Consensus](https://github.com/trustfarm/dev-documents/blob/master/HowToMake-DPOS-consensus-network-more-secure.md "DPOS Security Consensus")<br>

- Fund states transfer method:
Recent blockchain tech has many useful way to exchange funds to another blockchains.<br>
    - There's atomic swaps, 
	- Smart contract based message driven methods, 
	- 2-way of side chaining methods.
mainly considering methods are smart contract based fund transfer methods. <br>
also, DEX (DeCentralized Exchange) is can do by 3rd party service providers.



## OLD TESTNET Materials.

### 4) TEO TestNet Binary download link (current v0.2) 




### 1) TEO Testnet Development/Community Bounty Program
You can refer documents directory , [**TEO Testnet Bounty Program - V0.3**](https://github.com/trustfarm/teo-material/blob/master/documents/TEO-Airdrop-BountyProgram-v0.3.pdf "TEO Testnet Bounty Program v0.3")
<br>
and any recommendation on bounty program , you can use github [issues](https://github.com/trustfarm/teo-material/issues)
<br>
### 2) TEO Explorer for TestNet
 
  **https://teoexplorer.tao.ac**   , and github [issues](https://github.com/trustfarm/teo-explorer/issues)
   <br>

### 3) TEO Wallet for TestNet
 
  **https://wallet.tao.ac**   , and github [issues](https://github.com/trustfarm/taowallet/issues)
   <br>

### 4) TEO TestNet Binary download link (current v0.2) 

 - Windows10  : [ windows 10 rteo.exe | https://github.com/trustfarm/rteo/raw/master/target/release/rteo.win10.zip ]<br>
 - Linux Ubuntu16.04 : [ UbuntuLinux parity | https://github.com/trustfarm/rteo/raw/master/target/release/rteo.linux.zip ]<br>

    After download binary and unzip it <br>




 ### 4. AirDrop Plan : 
-   Testnet : snapshot on 5.867M blocknumber ETH chain, 6.08M blocknumber ETC chain , each accounts will be airdroped by ratio of  <br>

    - 1 ETH with 0.1   TEO , minimum funds 0.01 ETH
    - 1 ETC with 0.003 TEO , minimum funds 0.3  ETC

 ### 5. PoW algorithm change : Ethash will be modified for prevent Dominant ASIC mining.

Refer above EIP-969 , EIP-1057 case .
If decentralized mining is guranteed , stay tuned to mining algorithms. <br>
It means there are several ASIC miner providers in market, and crowd of miners have choose mining devices then it is distributed and stay tune PoW algorithms.

 ### 6. TestNet Binary and TEO Explorer for TestNet

 - Windows10  : [ windows 10 rteo.exe | https://github.com/trustfarm/rteo/raw/master/target/release/rteo.win10.zip ]<br>
 - Linux Ubuntu16.04 : [ UbuntuLinux parity | https://github.com/trustfarm/rteo/raw/master/target/release/rteo.linux.zip ]<br>

    After download binary and unzip it <br>

 - **TEO TestNet Explorer** <br>
   **http://teoexplorer.tao.ac**   , and github [issues](https://github.com/trustfarm/teo-explorer/issues)
   <br>

 ### 7. Execution Client and Solo Mining

  option 1 : you can start teotest chain with **solo mining node** with rpcport **8546**<br>
  ```
  rteo --chain=teotest --author=YOUR_WALLET_ADDRESS --jsonrpc-port=8546 --ws-port=8547
  ```
  <br>

  option 2 : you can start teotest chain with simple client node , **no solo mining** , default rpcport is **8545** <br>
  ```
  rteo --chain=teotest
  ```
  <br>

  ##### Execute miner

  - ethminer Nvidia [Ethminer Tested Version - 0.14.0.dev1](https://github.com/trustfarm/teo-material/tree/master/ethminer-testver "ethminer tested ver") 
  ```
  ethminer -U -F 127.0.0.1:8546 --cuda-devices 1
  ```
  
  - Claymore Dual Miner [AMD+Nvidia] [DualMiner Tested Version - 11.7](https://mega.nz/#F!O4YA2JgD!n2b4iSHQDruEsYUvTQP5_w "Dualminer Mega archive")
  ```
  EthDcrMiner64.exe -allcoins 1 -epool http://127.0.0.1:8546 -etht 1000
  ```


 ### 8. Snapshot and balance converted information

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

 #### Converted Accounts informations and location.
   
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
  -- if there's sending error, you can retry it from errored position , and divide it with several times.<br>
  -- it is recommend multiple sending by several node servers. 

You can check your accounts, how many TEOt has airdroped, we prepared 2 kinds of  explorers for cross-checking.
<br>
[https://teoexplorer.tao.ac] , <br>
[https://explorer.tao.ac]

Please check and Review our projects and join.

