const network = 'kovan';

module.exports = {
  network,
  dReg: {
    abi: require('./ethereum/abi/dReg.json'),
    address: (() => {
      switch(network) {
        case 'kovan':
          return '0xcaf5A88e50551759eBb44a5e5648b4d6c1932F50';
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
