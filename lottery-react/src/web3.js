import {Web3} from 'web3';

let web3;
if (window.ethereum) {
    web3 = new Web3(window.ethereum);
    // Access the Ethereum provider
    const provider = window.ethereum;
    
    try {
        // Request account access if needed
       const accounts = await provider.request({ method: 'eth_requestAccounts' });
       console.log(accounts);
        
        // Accounts now exposed, can start interacting with the blockchain
    } catch (error) {
        console.error('User denied account access');
    }
} else {
    // The user doesn't have an Ethereum provider, you might want to ask them to install MetaMask
    console.log('Please install MetaMask!');
}

export default web3;