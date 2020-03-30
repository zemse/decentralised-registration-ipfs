import React, { Component } from 'react';
import { network } from '../../env';

const ethers = require('ethers');

export default class extends Component {
  openEraSwapLife = () => {
    window.open('https://eraswap.life/','','width=1001,height=650');
  }

  render = () => (
    <>
      <button onClick={this.openEraSwapLife}>Load Wallet Using Era Swap Life</button>
      <button onClick={() => window.wallet = ethers.Wallet.createRandom().connect(ethers.getDefaultProvider(network))}>Random Wallet</button>
    </>
  );
}
