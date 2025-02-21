🏦 Decentralized Lending & Borrowing DApp
A blockchain-based lending & borrowing platform built using React, Solidity, and Node.js. It enables borrowers to request loans and lenders to fund them securely using smart contracts and ERC-20 tokens.

🚀 Features
✅ ERC-20 Token Integration (MyToken.sol)
✅ Lending & Borrowing Smart Contracts
✅ Wallet Connection & Account Detection
✅ Loan History Tracking
✅ Dynamic Interest Rates
✅ Multi-Chain Support (Ethereum, Sepolia, etc.)
✅ Email Notifications for Loan Status Updates
✅ USDC Transfers & Crypto Payments

🛠️ Tech Stack
Frontend: React.js (Vite), Tailwind CSS / Bootstrap, ethers.js
Backend: Node.js, Express.js, MongoDB, Nodemailer
Blockchain & Smart Contracts: Solidity, Hardhat, OpenZeppelin
Storage: IPFS/Arweave for Proofs
📂 Project Structure
Frontend (frontend/):
pgsql
Copy
Edit
frontend
 ┣ 📂 src
 ┃ ┣ 📂 components
 ┃ ┃ ┣ 📜 Navbar.jsx
 ┃ ┃ ┣ 📜 LoanForm.jsx
 ┃ ┃ ┣ 📜 LoanList.jsx
 ┃ ┃ ┣ 📜 LoanHistory.jsx
 ┃ ┃ ┣ 📜 WalletConnect.jsx
 ┃ ┃ ┣ 📜 Notifications.jsx
 ┃ ┣ 📂 pages
 ┃ ┃ ┣ 📜 Home.jsx
 ┃ ┃ ┣ 📜 BorrowerDashboard.jsx
 ┃ ┃ ┣ 📜 LenderDashboard.jsx
 ┃ ┣ 📜 App.jsx
 ┃ ┣ 📜 contract.js
 ┃ ┣ 📜 index.js
 ┣ 📜 package.json
 ┣ 📜 .env
Backend (backend/):
pgsql
Copy
Edit
backend
 ┣ 📜 server.js
 ┣ 📜 routes.js
 ┣ 📜 db.js
 ┣ 📜 emailService.js
 ┣ 📜 package.json
⚡ Smart Contracts
1️⃣ ERC-20 Token Contract (MyToken.sol)
solidity
Copy
Edit
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;
import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract MyToken is ERC20 {
    constructor(uint256 initialSupply) ERC20("MyToken", "MTK") {
        _mint(msg.sender, initialSupply * 10 ** decimals());
    }
}
2️⃣ Lending & Borrowing Contract (LendingBorrowing.sol)
Manages loan requests, funding, repayments, and interest rates.

🚀 Getting Started
1️⃣ Clone the Repository
bash
Copy
Edit
git clone https://github.com/YOUR_GITHUB_USERNAME/lending-borrowing-dapp.git
cd lending-borrowing-dapp
2️⃣ Install Dependencies
📌 Frontend
bash
Copy
Edit
cd frontend
npm install
📌 Backend
bash
Copy
Edit
cd backend
npm install
📜 Environment Setup
Create a .env file in both frontend and backend folders.

Backend .env file:
ini
Copy
Edit
MONGO_URI=your_mongodb_connection
PRIVATE_KEY=your_wallet_private_key
SMTP_EMAIL=your_smtp_email
SMTP_PASSWORD=your_smtp_password
Frontend .env file:
ini
Copy
Edit
VITE_CONTRACT_ADDRESS=your_deployed_contract_address
VITE_INFURA_API_KEY=your_infura_api_key
🚀 Run the Project
Start Backend
bash
Copy
Edit
cd backend
node server.js
Start Frontend
bash
Copy
Edit
cd frontend
npm run dev
📜 Deploying Smart Contracts
1️⃣ Compile & Deploy on Sepolia Testnet
bash
Copy
Edit
npx hardhat run scripts/deploy.js --network sepolia
2️⃣ Verify Contract (Optional)
bash
Copy
Edit
npx hardhat verify --network sepolia YOUR_CONTRACT_ADDRESS
📌 Contribution
Feel free to fork this repo, create a new branch, and submit a pull request! 🚀

💡 I'm currently working on improving loan tracking, dynamic interest rates, and multi-chain support! 🔥


