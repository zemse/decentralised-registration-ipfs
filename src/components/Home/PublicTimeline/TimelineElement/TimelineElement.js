import React, { Component } from 'react';
import ipfsUtils from '../../../../ipfs-utils';
import { defaultProvider } from '../../../../ethereum/utils'
import { renderSecondsRemaining } from '../../../../utils';

const ethers = require('ethers');

export default class extends Component {
  state = {
    userAddress: null,
    multiHash: null,
    name: null,
    location: null,
    url: null,
    bio: null,
    time: null,
  };

  intervalId = null;

  componentDidMount = async() => {
    const userAddress = this.props.userAddress;
    const ipfsSha256Hash = this.props.ipfsSha256Hash;
    const multiHash = ipfsUtils.toMultihash(ipfsSha256Hash);

    console.log(`h: ${this.props.h}`, {ipfsSha256Hash}, {multiHash});
    this.setState({ userAddress, multiHash });


    const bytes = await ipfsUtils.get(multiHash);

    const profileObj = JSON.parse(ethers.utils.toUtf8String(bytes));
    // console.log({profileObj});
    this.setState({
      name: profileObj.name,
      location: profileObj.location,
      url: profileObj.url,
      bio: profileObj.bio,
    });

    const block = await defaultProvider.getBlock(this.props.blockNumber);
    console.log(block.timestamp, this.props.blockNumber);
    this.intervalId = setInterval(() => {
      this.setState({
        time: renderSecondsRemaining(Math.floor(Date.now()/1000) - block.timestamp) + ' ago'
      });
    })
  };

  componentWillUnmount = () => {
    clearInterval(this.intervalId);
  }

  render = () => {
    return (
      <div class="timeline-element">
        <span className="el-key">Address:</span> {this.state.userAddress}<br />
        <span className="el-key">IPFS:</span> {this.state.multiHash}<br />
        <span className="el-key">Name:</span> {this.state.name}<br />
        <span className="el-key">Location:</span> {this.state.location}<br />
        <span className="el-key">Url:</span> <a href={this.state.url} target="_blank">{this.state.url}</a><br />
        <span className="el-key">Bio:</span> {this.state.bio}<br />
        <span className="el-key">Update Time:</span> {this.state.time === null ? 'Loading...' : this.state.time}
      </div>
    );
  }
}
