import { ethers } from "hardhat";
import { Web3 } from "web3";
import abis from "../abis/abi.json"

async function main() {
    let web3 = new Web3("http://127.0.0.1:8545/f40e290c-6545-40e1-bddc-3f5aa4c03b4c");
    // setup
    const challengeContractAddress = "0x003DfC9555a4Fda6c4DB76383fC42C89b01c19Fc";

    const solvedCall = web3.eth.abi.encodeFunctionCall({
        name: "solved",
        type: "function",
        inputs: [],
        outputs: [{
            name: "",
            type: "bool"
        }]
      }, []);
    const solvedCallResult = await web3.eth.call({
        to: challengeContractAddress,
        data: solvedCall
    });
    console.log(solvedCallResult);
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