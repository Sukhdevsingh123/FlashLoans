import { useState } from "react";
import { ethers } from "ethers";
import LendingBorrowingABI from "../LendingBorrowing.json";

const contractAddress = "0xb15e912752618F89eb2Cb78ACFF6B9259EA3B22d";

const ConnectWallet = () => {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  const connectWallet = async () => {
    try {
      if (!window.ethereum) {
        alert("MetaMask is not installed!");
        return;
      }

      // Request MetaMask to connect wallet
      const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
      setAccount(accounts[0]); // Store connected wallet address

      // Setup ethers provider and signer
      const provider = new ethers.BrowserProvider(window.ethereum);
      const signer = await provider.getSigner();

      // Initialize contract
      const contractInstance = new ethers.Contract(contractAddress, LendingBorrowingABI, signer);
      setContract(contractInstance);

      console.log("Connected Wallet:", accounts[0]);
      console.log("Contract Address:", contractInstance.target); // `target` for ethers v6
    } catch (error) {
      console.error("Wallet Connection Error:", error);
    }
  };

  return (
    <div>
      {!account ? (
        <button onClick={connectWallet}>Connect Wallet</button>
      ) : (
        <div>
          <p>✅ Connected: {account}</p>
          {contract && <p>📜 Contract Address: {contract.target}</p>}
        </div>
      )}
    </div>
  );
};

export default ConnectWallet;

