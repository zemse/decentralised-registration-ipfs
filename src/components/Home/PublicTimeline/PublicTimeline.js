import React, { Component } from 'react';
import TimelineElement from './TimelineElement/TimelineElement';

const ethers = require('ethers');
const ipfsUtils = require('../../../ipfs-utils');

export default class extends Component {
  state = {
    fetchingLogs: true,
    logs: [],
    newLogs: []
  };

  componentDidMount = async() => {
    this.updateLogs();

    window.wallet.provider.on(window.dRegContract.filters.ProfileUpdated(), log => {
      // const parsed = window.dRegContract.interface.parseLog(log);
      // // console.log('parsed', parsed);
      // const newLogs = [parsed, ...this.state.newLogs];
      // // console.log('new logs', newLogs);
      // this.setState({ newLogs });

      this.updateLogs();
    });
  }

  updateLogs = async() => {
    this.setState({ fetchingLogs: true });

    const logs = (await window.wallet.provider.getLogs({
      ...window.dRegContract.filters.ProfileUpdated(),
      fromBlock: 0,
      toBlock: 'latest'
    })).map(log => window.dRegContract.interface.parseLog(log)).reverse();
    console.log({logs});

    this.setState({ logs, fetchingLogs: false });
  }

  render = () => {
    return (
      <>
        {
          this.state.fetchingLogs
          ? <p>Please wait fetching logs...</p>
          : <>

            {this.state.logs.map((log, i) => {
              const userAddress = log.values._userAddress;
              const ipfsSha256Hash = log.values._ipfsSha256Hash;
              return <TimelineElement
                key={i}
                userAddress={userAddress}
                ipfsSha256Hash={ipfsSha256Hash}
                h={i}
                />
            })}
          </>
        }
      </>
    );
  }
}