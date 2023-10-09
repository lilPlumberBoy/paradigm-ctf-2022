import Web3 from 'web3';

// Assuming you are connected to the network
let web3 = new Web3("http://127.0.0.1:8545/f40e290c-6545-40e1-bddc-3f5aa4c03b4c");


// Contract ABI and address
const contractAbi = [{"constant":true,"inputs":[],"name":"solved","outputs":[{"name":"","type":"bool"}],"payable":false,"stateMutability":"view","type":"function"}];
const contractAddress = '0x769fdf3111CB4B152bb488512E588a6dF670C61B';

// Create a new contract instance
const contract = new web3.eth.Contract(contractAbi, contractAddress);

async function getSolvedValue() {
    try {
        // Call the 'solved' function of the contract
        const solvedValue = await contract.methods.solved().call();
        console.log('Solved value: ', solvedValue);
    } catch (error) {
        console.error('An error occurred: ', error);
    }
}

getSolvedValue();