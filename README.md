 # **TEO** (**T**rust**E**THre**O**rigin) Blockchain
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
   

**TAO** Archicture aim to be a space to platform for each other blockchain's connections and co-operations, finally it will more good for solve scalablity issues of blockchain.<br>

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

### TEO is beginning of this TAO Architecture

#### This directory cotains TEO testnet materials archives.

TEO Blockchain Spec:

1. NetworkID : 0x8888 (MainNet) ,  0x8282 (TestNet)

2. PoW Algorithm : EtHash - CodeBase fork from Ethereum Parity Client.
    It will modified in future , for more doing a GPU mining.  <br> 
Refer EthASICPrevent Discussions [EIP-1057](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-1057.md) , [EIP-969](https://github.com/ethereum/EIPs/blob/master/EIPS/eip-969.md) . <br>
It will Prevent some months , but not last long, current problem is ASIC provider is dominant little company in market, it will make mining centralization.

3. TestNet v0.1 Lifecycle : ~ 1,000,000 blocks.
   at 1M block height, current testnet will suiside.<br>

   Before 1M blocks, MainNet v0.1 and TestNet v0.2 will be launched. and then it will be more upgraded and live long.<br>

4. Block Rewards : 5 TEO - same as original ethereum.

5. SSZ Funds (쌈짓돈-Ssamzi-don(money)) : 0.5 TEO / Block
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
