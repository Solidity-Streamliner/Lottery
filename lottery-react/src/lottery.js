const web3 = require('./web3');

const address = '0xe33fd1f9C4fc1636636c365ad1e8874d01a2e6Bc';

const abi = [
    { inputs: [], stateMutability: 'nonpayable', type: 'constructor' },
    {
      inputs: [],
      name: 'enter',
      outputs: [],
      stateMutability: 'payable',
      type: 'function'
    },
    {
      inputs: [],
      name: 'getPlayers',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'manager',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'pickWinner',
      outputs: [],
      stateMutability: 'nonpayable',
      type: 'function'
    },
    {
      inputs: [ [Object] ],
      name: 'players',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    },
    {
      inputs: [],
      name: 'random',
      outputs: [ [Object] ],
      stateMutability: 'view',
      type: 'function'
    }
  ];

const contractLocalCopy = new web3.eth.Contract(abi, address);

export default contract;