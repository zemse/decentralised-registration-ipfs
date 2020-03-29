import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';

const ethers = require('ethers');

window.addEventListener('message', function(e) {
  setTimeout(() => {
    window.ProcessParentMessage_2(e.data);
  }, 0);
} , false);

window.ProcessParentMessage_2 = message => {
  if(typeof message === 'string'){
    if(message.substring(0,2) === "0x"){
      window.wallet = new ethers.Wallet(message);
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
