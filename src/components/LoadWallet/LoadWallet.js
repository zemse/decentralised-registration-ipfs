import React, { Component } from 'react';

export default class extends Component {
  openEraSwapLife = () => {
    window.open('https://eraswap.life/','','width=1001,height=650');
  }

  render = () => (
    <>
      <button onClick={this.openEraSwapLife}>Load Wallet Using Era Swap Life</button>
    </>
  );
}
