import React, { Component } from 'react';
import { dReg, network, ipfs } from '../../../env';
import { REGISTRATION_STATUS_ENUM, IPFS_GET_STATUS_ENUM } from '../../../enums';

import EditProfile from './EditProfile/EditProfile';

const ethers = require('ethers');
const ipfsUtils = require('../../../ipfs-utils');

export default class extends Component {
  state = {
    registrationStatus: REGISTRATION_STATUS_ENUM.CHECKING,
    ipfsGetStatus: IPFS_GET_STATUS_ENUM.IDLE,
    // profileObj: null,
    showEditProfile: false,
    errorMessage: ''
  };

  componentDidMount = async() => {
    // window.dRegContract = new ethers.Contract(dReg.address, dReg.abi, ethers.getDefaultProvider(network));
    //
    // window.dRegContract = window.dRegContract.connect(window.wallet);

    const profileStruct = await window.dRegContract.functions.profiles(window.wallet.address);

    await this.setState({
      registrationStatus: profileStruct.ipfsSha256Hash === ethers.constants.HashZero
        ? REGISTRATION_STATUS_ENUM.NOT_REGISTERED
        : REGISTRATION_STATUS_ENUM.REGISTERED,
      ipfsGetStatus: IPFS_GET_STATUS_ENUM.LOADING
    });

    if(this.state.registrationStatus === REGISTRATION_STATUS_ENUM.REGISTERED) {
      this.updateProfileObj(profileStruct.ipfsSha256Hash);
    }
  }

  updateProfileObj = async hash => {
    try {
      let ipfsHash = hash;
      try {
        ipfsHash = ipfsUtils.toMultihash(hash);
      } catch (error) {}
      const bytes = await ipfsUtils.get(ipfsHash);

      const profileObj = JSON.parse(ethers.utils.toUtf8String(bytes));
      console.log({profileObj});

      window.profileObj = profileObj;

      this.setState({
        ipfsGetStatus: IPFS_GET_STATUS_ENUM.LOADED,
        // profileObj
      });
    } catch (error) {
      console.log(error);
      this.setState({
        errorMessage: error.message,
        ipfsGetStatus: IPFS_GET_STATUS_ENUM.NOT_FOUND,
      });
    }
  };

  render = () => {
    return (
      <>
        {
          !this.state.showEditProfile
          ? <>
            <p>{(() => {
              switch(this.state.registrationStatus) {
                case REGISTRATION_STATUS_ENUM.CHECKING:
                  return <>Checking your registration status...</>;
                case REGISTRATION_STATUS_ENUM.NOT_REGISTERED:
                  return <>You have not registered.<br />
                  <button onClick={() => this.setState({
                    showEditProfile: true
                  })}>Register Now</button></>;
                case REGISTRATION_STATUS_ENUM.REGISTERED:
                  return <>
                    You are registered<br />
                    {(() => {
                      switch(this.state.ipfsGetStatus) {
                        case IPFS_GET_STATUS_ENUM.LOADING:
                          return <>Fetching your profile details from IPFS...</>;
                        case IPFS_GET_STATUS_ENUM.LOADED:
                          return <>
                            Successfully, fetched your profile from IPFS.<br />
                            <button onClick={() => this.setState({
                              showEditProfile: true
                            })}>Edit Profile</button>
                          </>;
                        case IPFS_GET_STATUS_ENUM.NOT_FOUND:
                          return <>Looks like your profile was dropped from IPFS, kindly re-update your profile.</>;
                      }
                    })()}
                  </>;
                default:
                  return null;
              }
            })()}</p>
          </>
          : <EditProfile
              hideProfile={() => this.setState({ showEditProfile: false })}
              updateProfileObj={this.updateProfileObj}
            />
        }
      </>
    );
  }
}
