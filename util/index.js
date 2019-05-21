const EC = require('elliptic').ec;
const cryptoHash = require('../util/crypto-hash')

const verifySignature = ({publicKey,data,signature})=>{
    const keyFromPublic = ec.keyFromPublic(publicKey, 'hex')
    return keyFromPublic.verify(cryptoHash(data),signature)
}

const ec = new EC('secp256k1');

module.exports = { ec ,verifySignature ,cryptoHash}