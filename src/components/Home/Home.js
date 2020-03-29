import React, { Component } from 'react';
import { dReg, network } from '../../env';
import { REGISTRATION_STATUS_ENUM } from '../../enums';

const ethers = require('ethers');

export default class extends Component {
  state = {
    registrationStatus: REGISTRATION_STATUS_ENUM.CHECKING,
  };

  componentDidMount = async() => {
    window.dRegContract = new ethers.Contract(dReg.address, dReg.abi, ethers.getDefaultProvider(network));

    const profile = await window.dRegContract.functions.profiles(window.wallet.address);

    this.setState({
      registrationStatus: profile.ipfsSha256Hash === ethers.constants.HashZero
        ? REGISTRATION_STATUS_ENUM.NOT_REGISTERED
        : REGISTRATION_STATUS_ENUM.REGISTERED
    });
  }

  render = () => {

    return (
      <>
        <p>Welcome to {window.wallet.address}!</p>
        <p>{(() => {
          switch(this.state.registrationStatus) {
            case REGISTRATION_STATUS_ENUM.CHECKING:
              return <>Checking your registration status...</>;
            case REGISTRATION_STATUS_ENUM.NOT_REGISTERED:
              return <>You have not registered. Register Now.</>;
            case REGISTRATION_STATUS_ENUM.REGISTERED:
              return <>You are registered</>;
            default:
              return null;
          }
        })()}</p>
      </>
    );
  }
}
