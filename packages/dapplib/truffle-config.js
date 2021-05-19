require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'gloom argue blue shadow shock note pulse purpose hunt opera surge swift'; 
let testAccounts = [
"0xfc538f6258b9ab448880f340a5912e6b802dc74afdb6c3d1c88c1d9360634ace",
"0x9f6c8560ce265f807732e58a085764f3361fbe4be3ab8ce1f2017fed323d3e9c",
"0x0c1175d9aea6eca8e2bc5a4c860d29c4f781eed45176ba8e2e290af5614b1d33",
"0x17c87760df6d1f42ba1f4a1fcc9e73a11b1f05f6689b3a4c75761cba29ce047e",
"0x56d0f14631872f7a5891e1d72d0e1c1066bf0a31a4c36f6997c134e69bb88819",
"0x931aa5978ed9cb375d6f4ac2b28057a46ccd7e0f061c4ade19a6b75c8d50094b",
"0x1fea7cd0527718f1b694817c580df44a31571987e60b148cfef2c3a2076d9da5",
"0x22224a8a34147a480cee7780ffff31e222ec8bf570e059136042b9614ce571b9",
"0x35398d2495e4e64b34cf3608154a10d111136712c24b976c6093a83f1db6c7f1",
"0x26f0c26cb9e522ddc3cc12c4924e904b92702d602b632f8b5be50b568c94a68b"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
