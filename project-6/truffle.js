const HDWallet = require('truffle-hdwallet-provider');
 const infuraKey = "a5dad61886c94e40935a138be53c1a79";
 const fs = require('fs');
const mnemonic = fs.readFileSync(".secret").toString().trim();
 

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 8545,
      network_id: "*" // Match any network id
    }
  },

  rinkeby: {
      provider: () => new HDWallet(mnemonic, `https://rinkeby.infura.io/v3/${infuraKey}`),
        network_id: 4,       // rinkeby's id
        gas: 4500000,        // rinkeby has a lower block limit than mainnet
        gasPrice: 10000000000
    },
};