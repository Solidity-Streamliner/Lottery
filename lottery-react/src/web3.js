import Web3 from 'web3';

const getWeb3 = () =>
  new Promise(async (resolve, reject) => {
    if (window.ethereum) {
      try {
        await window.ethereum.request({ method: 'eth_requestAccounts' });
        const web3 = new Web3(window.ethereum);
        resolve(web3);
      } catch (error) {
        reject('User denied account access', error);
      }
    } else {
      reject('Please install MetaMask!');
    }
  });

export default getWeb3;