import React, { useState } from "react";
import { getContract } from "../Contract";

const LoanForm = () => {
  const [amount, setAmount] = useState("");
  const [duration, setDuration] = useState("");
  const [loading, setLoading] = useState(false);

  const requestLoan = async () => {
    if (!window.ethereum) {
      alert("Please install MetaMask!");
      return;
    }

    try {
      setLoading(true);
      const contract = await getContract(); // Await the contract instance

      const tx = await contract.requestLoan(amount, duration);
      await tx.wait(); // Wait for transaction confirmation

      alert("Loan Requested Successfully!");
    } catch (error) {
      console.error("Error requesting loan:", error);
      alert("Loan request failed!");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="card p-4">
      <h3>Request a Loan</h3>
      <input
        type="number"
        className="form-control my-2"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <input
        type="number"
        className="form-control my-2"
        placeholder="Duration (days)"
        value={duration}
        onChange={(e) => setDuration(e.target.value)}
      />
      <button className="btn btn-primary" onClick={requestLoan} disabled={loading}>
        {loading ? "Processing..." : "Submit"}
      </button>
    </div>
  );
};

export default LoanForm;


            
 