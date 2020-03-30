const network = 'kovan';

module.exports = {
  network,
  dReg: {
    abi: require('./ethereum/abi/dReg.json'),
    address: (() => {
      switch(network) {
        case 'kovan':
          return '0x5149067BD6EDa621dF2201b6BDCC3494bAe349C9';
        default:
          return null;
      }
    })()
  },
  ipfs: {
    infura: {
      host: 'ipfs.infura.io',
      port: 5001,
      protocol: 'https'
    }
  }
};
