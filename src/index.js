import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { network } from './env';

const ethers = require('ethers');
const ipfsUtils = require('./ipfs-utils');

window.ethers = ethers;
window.ipfsUtils = ipfsUtils;

window.wallet = (new ethers.Wallet(
  '24C4FE6063E62710EAD956611B71825B778B041B18ED53118CE5DA5F02E494BA'))
  .connect(ethers.getDefaultProvider(network));

window.addEventListener('message', function(e) {
  setTimeout(() => {
    window.ProcessParentMessage_2(e.data);
  }, 0);
} , false);

window.ProcessParentMessage_2 = message => {
  if(typeof message === 'string'){
    if(message.substring(0,2) === "0x"){
      window.wallet = (new ethers.Wallet(message)).connect(ethers.getDefaultProvider(network));
    }
  }
}

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
