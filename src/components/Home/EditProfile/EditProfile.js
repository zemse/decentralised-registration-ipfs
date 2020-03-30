import React, { Component } from 'react';
import { IPFS_ADD_STATUS_ENUM, ETH_TX_CONFIRM_ENUM } from '../../../enums';
const ethers = require('ethers');
const ipfsUtils = require('../../../ipfs-utils');

export default class extends Component {
  state = {
    name: '',
    location: '',
    bio: '',
    ipfsHash: null,
    ipfsStatus: IPFS_ADD_STATUS_ENUM.IDLE,
    txStatus: ETH_TX_CONFIRM_ENUM.IDLE,
    errorMessage: ''
  };

  componentDidMount = () => {
    if(window.profileObj) {
      this.setState({
        name: window.profileObj.name,
        location: window.profileObj.location,
        bio: window.profileObj.bio
      });
    }
  };

  render = () => {
    return (
      <>
        <p>Register form</p>
        Name: <input
          placeholder="Enter your name"
          value={this.state.name}
          onChange={event => this.setState({ name: event.target.value })}
          /><br />
        Location: <input
          placeholder="Enter your location"
          value={this.state.location}
          onChange={event => this.setState({ location: event.target.value })}
          /><br />
        Bio: <textarea
          placeholder="Tell me about yourself"
          value={this.state.bio}
          onChange={event => this.setState({ bio: event.target.value })}
          ></textarea>
        <button disabled={this.state.ipfsStatus !== IPFS_ADD_STATUS_ENUM.IDLE} onClick={async() => {
          try {
            this.setState({ ipfsStatus: IPFS_ADD_STATUS_ENUM.UPLOADING });
            const data = {
              version: 1,
              name: this.state.name,
              location: this.state.location,
              bio: this.state.bio
            };
            const bytes = ethers.utils.toUtf8Bytes(JSON.stringify(data));
            const ipfsHash = await ipfsUtils.add(bytes);
            this.setState({ ipfsHash, ipfsStatus: IPFS_ADD_STATUS_ENUM.UPLOADED });
          } catch (error) {
            this.setState({
              errorMessage: error.message,
              ipfsStatus: IPFS_ADD_STATUS_ENUM.IDLE
            });
          }
        }}>{(() => {
          switch(this.state.ipfsStatus) {
            case IPFS_ADD_STATUS_ENUM.IDLE:
              return <>Generate IPFS Hash</>;
            case IPFS_ADD_STATUS_ENUM.UPLOADING:
              return <>Uploading...</>;
            case IPFS_ADD_STATUS_ENUM.UPLOADED:
              return <>Uploaded!</>;
          }
        })()}</button>
        {this.state.ipfsHash ? <>
          New IPFS Hash: {this.state.ipfsHash}
          <button onClick={async() => {
            this.setState({ txStatus: ETH_TX_CONFIRM_ENUM.SIGNING });
            const bytes32 = ipfsUtils.multihashToBytes32(this.state.ipfsHash);
            const tx = await window.dRegContract.functions.updateProfile(bytes32);
            console.log(tx.hash);
            this.setState({ txStatus: ETH_TX_CONFIRM_ENUM.WAITING });
            await tx.wait();
            this.setState({ txStatus: ETH_TX_CONFIRM_ENUM.CONFIRMED });
            // trigger update profile
          }}>{(() => {
            switch(this.state.txStatus) {
              case ETH_TX_CONFIRM_ENUM.IDLE:
                return <>Sign and Submit Update Profile Tx</>;
              case ETH_TX_CONFIRM_ENUM.SIGNING:
                return <>Signing...</>;
              case ETH_TX_CONFIRM_ENUM.WAITING:
                return <>Waiting for confirmation</>;
              case ETH_TX_CONFIRM_ENUM.CONFIRMED:
                return <>Profile Updated</>;
            }
          })()}</button>
        </> : null}
      </>
    );
  }
}
