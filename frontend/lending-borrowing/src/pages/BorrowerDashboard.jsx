import { useState ,useEffect } from 'react';
import { getContract } from "../Contract";
import LoanForm from '../components/LoanForm';



function BorrowerDashboard(props) {

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
                const contractInstance = await getContract();
                setContract(contractInstance);
            } catch (error) {
                console.error("Wallet connection error:", error);
            }
        };
        connectWallet();
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