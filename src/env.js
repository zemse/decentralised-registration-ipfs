const network = 'kovan';

module.exports = {
  network,
  dReg: {
    abi: require('./ethereum/abi/dReg.json'),
    address: (() => {
      switch(network) {
        case 'kovan':
          return '0x51Cb838E106435067A04D60185Ba731B7cD1150e';
        default:
          return null;
      }
    })()
  }
};
