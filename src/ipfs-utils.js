const { ipfs } = require('./env');
const IPFS = require('ipfs-http-client');
const bs58 = require('bs58');
const ethers = require('ethers');

const ipfsClient = new IPFS(ipfs.infura);

// data should be hex string or uint8 array
async function add(input) {
  let data;
  if(typeof input === 'string') {
    if(input.slice(0, 2) === '0x') {
      data = ethers.utils.arrayify(input);
    } else {
      data = ethers.utils.toUtf8Bytes(input);
    }
  } else if(input instanceof Uint8Array && input.filter(n => n >= 256).length === 0) {
    data = input;
  } else {
    window.ssss = input;
    console.log({input, first: Array.isArray(input), second: input.filter(n => n >= 256).length === 0});
    throw new Error('Invalid input: ' + input);
  }

  const asyncGenerator = ipfsClient.add(input);
  const output = await asyncGenerator.next();
  return output.value.path;
}

async function get(ipfsHash) {
  const asyncGenerator = ipfsClient.get(ipfsHash);
  const output = await asyncGenerator.next();
  const contentGenerator = output.value.content;
  const content = await contentGenerator.next();
  // console.log({content});
  return content.value._bufs.length === 1
    ? content.value._bufs[0]
    : content.value._bufs;
}

function multihashToBytes32(ipfsHash) {
  const decoded = bs58.decode(ipfsHash);
  if(decoded.length !== 34) throw new Error(`Invalid IPFS Hash Size: ${decoded.length} bytes`);
  return decoded.slice(2);
}

function toMultihash(bytes32) {
  const hex = ethers.utils.hexlify(bytes32);
  return bs58.encode(ethers.utils.concat(['0x1220', hex]));
}

module.exports = { bs58, add, get, multihashToBytes32, toMultihash };
