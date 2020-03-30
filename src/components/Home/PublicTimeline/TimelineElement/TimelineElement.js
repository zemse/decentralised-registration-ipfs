import React, { Component } from 'react';

const ethers = require('ethers');
const ipfsUtils = require('../../../../ipfs-utils');

export default class extends Component {
  state = {
    userAddress: null,
    multiHash: null,
    name: null,
    location: null,
    url: null,
    bio: null
  };

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
  };

  render = () => {
    return (
      <div class="timeline-element">
        <span className="el-key">Address:</span> {this.state.userAddress}<br />
        <span className="el-key">IPFS:</span> {this.state.multiHash}<br />
        <span className="el-key">Name:</span> {this.state.name}<br />
        <span className="el-key">Location:</span> {this.state.location}<br />
        <span className="el-key">Url:</span> <a href={this.state.url} target="_blank">{this.state.url}</a><br />
        <span className="el-key">Bio:</span> {this.state.bio}
      </div>
    );
  }
}
