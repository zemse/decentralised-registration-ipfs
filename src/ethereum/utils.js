import { ethers } from 'ethers';
import { network } from '../env';

export const defaultProvider = ethers.getDefaultProvider(network)

export const getSigner = async (
    askWallet = true
  ) => {
    if (typeof window == "undefined") {
      // not in browser
    } else {
      // in the browser
      const _window = window;
      const storedPk = window.localStorage.getItem("test-pk");
      try {
        const wallet = new ethers.Wallet(storedPk, defaultProvider);
        const balance = await wallet.getBalance();
        const res =
          !askWallet ||
          window.confirm(
            `Use cached wallet? Address: ${
              wallet.address
            } Balance: ${ethers.utils.formatEther(balance)}`
          );
        if (res) {
          return wallet;
        } else {
          const res = window.confirm(
            `Do you want to delete cached wallet? Address: ${wallet.address}`
          );
          if (res) {
            window.localStorage.removeItem("test-pk");
          }
        }
      } catch {}
  
      if (_window.ethereum == undefined) {
        // metamask not installed
        while (true) {
          try {
            const pk = prompt(
              "Metamask not installed. Please use a kovan private key"
            );
            const wallet = new ethers.Wallet(pk, defaultProvider);
            const balance = await wallet.getBalance();
            alert(
              `Wallet Imported! Address: ${
                wallet.address
              } Balance: ${ethers.utils.formatEther(balance)} ETH`
            );
  
            window.localStorage.setItem("test-pk", pk);
  
            return wallet;
          } catch (e) {
            const res = window.confirm(`There was error: ${e.message}. Want to retry?`);
            if (!res) {
              break;
            }
          }
        }
      } else {
        // metamask installed
        await _window.ethereum.enable();
        console.log('defaultProvider.chainId', (await defaultProvider.getNetwork()).chainId, +_window.ethereum.chainId);
        if (+_window.ethereum.chainId !== (await defaultProvider.getNetwork()).chainId) {
          throw new Error("Please switch network to Kovan");
        }
        const mmProvider = new ethers.providers.Web3Provider(_window.ethereum);
        return mmProvider.getSigner();
      }
    }
  
    throw new Error("No signer available");
  };