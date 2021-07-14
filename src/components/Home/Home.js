import React, { Component } from 'react';
import { dReg, network, ipfs } from '../../env';
import { REGISTRATION_STATUS_ENUM, IPFS_GET_STATUS_ENUM } from '../../enums';

import UserDashboard from './UserDashboard/UserDashboard';
import EditProfile from './UserDashboard/EditProfile/EditProfile';
import PublicTimeline from './PublicTimeline/PublicTimeline';

import ipfsUtils from '../../ipfs-utils';
const ethers = require('ethers');

export default class extends Component {
  state = {
    name: null,
    showTimeLine: false,
  };

  componentDidMount = () => {
    setInterval(() => {
      if(window.profileObj && window.profileObj.name !== this.state.name) {
        this.setState({ name: window.profileObj.name });
      }
    }, 100);
  };

  render = () => {
    return (
      <>
        <p>Welcome {this.state.name ? <>{this.state.name}</> : <>{window.wallet.address}</>}!</p>
        {
          !this.state.showTimeLine
          ? <>
              <UserDashboard />
              <button onClick={() => this.setState({ showTimeLine: true })}>Show Everyone's Profile Updates</button>
            </>
          : <>
              <button onClick={() => this.setState({ showTimeLine: false })}>Show My Dashboard</button>
              <PublicTimeline />
            </>
        }
      </>
    );
  }
}
