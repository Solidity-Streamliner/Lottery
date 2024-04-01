import getWeb3 from './web3';

const address = '0x1ce460C25e4e51C93F83d4651a4CA44b5c333391';

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

const getContract = async () => {
    const web3 = await getWeb3();
    return new web3.eth.Contract(abi, address);
};

export default getContract;