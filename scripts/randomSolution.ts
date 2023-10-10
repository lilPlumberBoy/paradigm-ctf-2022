import { ethers } from "hardhat";
import { Web3, Web3BaseWalletAccount } from "web3";
import abis from "../abis/abi.json"

async function main() {
    let web3 = new Web3("http://127.0.0.1:8545/694dd864-a7af-4b8d-a324-a36c7962036d");

    // setup
    const setupContractAddress = "0x9876fA1999C1D14E713E5041e4Ca1Ee39Ec01273";
    const challanegeUserPKEY = "0x2e587249480b990df06b16fb381bdede9178b43205eef988dec170e8312c1bee"
    const userWallet = web3.eth.accounts.wallet.add(challanegeUserPKEY);
    // log block number for sanity, confirms connection to local node
    console.log("blocknumber : ",(await web3.eth.getBlockNumber()).toString());


    const setupContract = new web3.eth.Contract(abis["setup"], setupContractAddress);
    // get the challenge contract address by calling the setup contract
    // below fails for strange reason ()
    // const challengeContractAddress = await setupContract.methods.random().call();
    const challengeContractAddress = "0xbe9c2ce3be141154b2f9043932695629feac4bf3";
    // console.log("challenge contract address : ", challengeContractAddress);
    const challegeContract = new web3.eth.Contract(abis["random"], challengeContractAddress);
    // below fails with 'Returned error: invalid uuid specified
    console.log("solved? :", await challegeContract.methods.solved().call());
   
   
    // trying
    // var encoded = challegeContract.methods.solved().encodeABI()
    // var block = await web3.eth.getBlock("latest");
    // var gasLimit = Math.round(Number(block.gasLimit / BigInt(block.transactions.length)));

    // var tx = {
    //     gas: gasLimit,
    //     // gasPrice: 200,
    //     maxPriorityFeePerGas: 150,
    //     maxFeePerGas: 200,
    //     from: userWallet[0].address,
    //     to: challengeContractAddress,
    //     data: encoded
    // }

    // web3.eth.accounts.signTransaction(tx, challanegeUserPKEY).then(signed => {
    //     web3.eth.sendSignedTransaction(signed.rawTransaction).on('receipt', console.log)
    // })
    // const solvedCall = web3.eth.abi.encodeFunctionCall({
    //     name: "solved",
    //     type: "function",
    //     stateMutability: "view",
    //     inputs: [],
    //     outputs: [{
    //         name: "",
    //         type: "bool"
    //     }]
    //   }, []);
    // const solvedCallResult = await web3.eth.call({
    //     to: challengeContractAddress,
    //     from: userWallet[0].address,
    //     data: solvedCall
    // });
    // console.log(solvedCallResult);
    // console.log(web3.eth.abi.decodeParameter("bool", solvedCall)); // no word :(
    // console.log(solvedCall);

    // abi.decode(data, (string, uint, string));

    // const solveFunctionSignature = web3.eth.abi.encodeFunctionSignature("solve(uint256)");
    // const challengeContractUserPrivatekey = " 0x4c5039d7a95a803875b2832b31658a62589fb82573f991dfe84a2b5d14acb8f2";
    // web3.eth.defaultAccount = challengeContractUserPrivatekey; 
    // const challengeContractUser = new ethers.Wallet(challengeContractUserPrivatekey);

    // solve the challenge using only web3
    // console.log(await challengeContract.methods.solved().call());

    // await challengeContract.methods.solve(4).call({from: challengeContractUser});
    // console.log(await challengeContract.methods.solved().call({from: challengeContractUser}));
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });