import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import LoadWallet from './components/LoadWallet/LoadWallet';
import Home from './components/Home/Home';

export default class extends Component {
  state = {
    walletLoaded: false
  };

  componentDidMount = () => {
    setInterval(() => {
      const walletLoaded = window.wallet !== undefined;
      if(walletLoaded !== this.state.walletLoaded) {
        this.setState({ walletLoaded });
      }
    }, 100);
  };

  render = () => (
    <div className="App">
      <header className="App-header">
        {
          !this.state.walletLoaded
          ? <LoadWallet />
          : <Home />
        }
      </header>
    </div>
  );
}
