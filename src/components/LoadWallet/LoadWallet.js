import React, { Component } from 'react';
import {getSigner} from '../../ethereum/utils';

const ethers = require('ethers');

export default class extends Component {
   loadWallet = async () => {
    const signer = await getSigner();
    window.wallet = signer;
    window.wallet.address = await window.wallet.getAddress();
    window.dRegContract = window.dRegContract.connect(window.wallet);
  }

  render = () => (
    <>
      <button onClick={this.loadWallet}>Load Wallet</button>
    </>
  );
}
