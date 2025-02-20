
import { ethers } from "ethers";
import LendingBorrowingABI from "./LendingBorrowing.json";

const contractAddress = "0xb15e912752618F89eb2Cb78ACFF6B9259EA3B22d";

export const getContract = async () => {
  if (!window.ethereum) {
    alert("MetaMask is not installed!");
    return null;
  }

  try {
    // Connect to MetaMask
    const provider = new ethers.BrowserProvider(window.ethereum);
    const signer = await provider.getSigner();
    
    // Initialize contract
    const contract = new ethers.Contract(contractAddress, LendingBorrowingABI, signer);
    return contract;
  } catch (error) {
    console.error("Error connecting to contract:", error);
    return null;
  }
};
