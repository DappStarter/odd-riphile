require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'hunt case area tooth novel crouch pizza million coral light army gasp'; 
let testAccounts = [
"0x0ab9d7f50720491cde818d6ebcf1efee035a4db564a6dcbc01ab7d4d7903fac4",
"0x3d8cc45abc076c292aad66861d7d572c235ba6747d96390340259fe2c687481a",
"0xf143a121e9ab81680372ae7c80234318af7364ad9d7fe9c02cc2f2cf6823bae0",
"0xb4d9b1cd22194ec055f93207d391d03869712fa673fd01932217557ba0d47b66",
"0xcd7f52c7cd521ce949560398ebcbe826bd94173d90c010bc970c799a4028d97d",
"0xf8df5b383a8f1fc5dd2d73e4a98e72e4034a114e130280dc58f1c82193c84366",
"0xabd429b1f4884f044aed9e39efb132c5ff71c6049a19cb0ece3076bf32d769dc",
"0xf03aafc80a06ec1b7c9e961956b617df3060e8c2e0f1a0a8110fb29ed13ba1a4",
"0x17b552ae1089100cbbf180c1acd4f589813d10487cbb83970e8855d70267ac81",
"0x56673190b51b088d205717676a961f96ada6b19d0108d03e072002c31a8b48ab"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
