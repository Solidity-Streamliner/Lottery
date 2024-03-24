const path = require('path');
const fs = require('fs');
const solc = require('solc');

const contractPath = path.resolve(__dirname, 'contracts', 'Lottery.sol');
const source = fs.readFileSync(contractPath, 'utf8');

var input = {
    language: 'Solidity',
    sources: {
        'Lottery.sol' : {
            content: source
        }
    },
    settings: {
        outputSelection: {
            '*': {
                '*': [ '*' ]
            }
        }
    }
}; 

// Compile the Solidity code using solc
const compiledCode = JSON.parse(solc.compile(JSON.stringify(input)));

// Get the bytecode from the compiled contract
const bytecode = compiledCode.contracts['Lottery.sol']['Lottery'].evm.bytecode.object;

const abi = compiledCode.contracts['Lottery.sol']['Lottery'].abi;

module.exports = { abi, bytecode };

// Log the Contract ABI to the console
console.log('Contract ABI:\n', abi);