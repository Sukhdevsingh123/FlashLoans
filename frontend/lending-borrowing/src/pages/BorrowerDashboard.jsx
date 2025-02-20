import { useState, useEffect } from "react";
import { getContract } from "../Contract";
import LoanForm from "../components/LoanForm";

function BorrowerDashboard() {
  const [account, setAccount] = useState(null);
  const [contract, setContract] = useState(null);

  useEffect(() => {
    const connectWallet = async () => {
      try {
        if (!window.ethereum) {
          alert("MetaMask is not installed!");
          return;
        }

        // Request MetaMask connection
        const accounts = await window.ethereum.request({ method: "eth_requestAccounts" });
        setAccount(accounts[0]); // Store the connected wallet address

        // Get contract instance
        const contractInstance = await getContract();
        setContract(contractInstance);

        // Listen for account changes
        window.ethereum.on("accountsChanged", (newAccounts) => {
          setAccount(newAccounts[0] || null);
        });

        // Listen for network changes (optional)
        window.ethereum.on("chainChanged", () => {
          window.location.reload(); // Refresh page on network change
        });
      } catch (error) {
        console.error("Wallet connection error:", error);
      }
    };

    connectWallet();

    return () => {
      if (window.ethereum) {
        window.ethereum.removeListener("accountsChanged", () => {});
        window.ethereum.removeListener("chainChanged", () => {});
      }
    };
  }, []);

  return (
    <div className="container mt-4">
      <h1 style={{ textAlign: "center" }}>Borrower Dashboard</h1>

      {/* Wallet Connection Info */}
      <div className="alert alert-info text-center">
        {account ? `Connected: ${account.slice(0, 6)}...${account.slice(-4)}` : "Connecting wallet..."}
      </div>

      <LoanForm />
    </div>
  );
}

export default BorrowerDashboard;
