// SPDX-License-Identifier: MIT
pragma solidity ^0.8.18;

import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract LendingBorrowing {
    IERC20 public token;
    address public owner;

    struct Loan {
        address borrower;
        uint256 amount;
        uint256 interest;
        uint256 duration;
        bool funded;
        bool repaid;
    }

    mapping(address => Loan) public loans;

    event LoanRequested(address indexed borrower, uint256 amount, uint256 interest, uint256 duration);
    event LoanFunded(address indexed lender, address indexed borrower, uint256 amount);
    event LoanRepaid(address indexed borrower, uint256 amount);
    event LoanHistory(address indexed borrower, uint256 amount, uint256 interest, uint256 duration, bool repaid);

    constructor(address _tokenAddress) payable {
        token = IERC20(_tokenAddress);
        owner = msg.sender;
    }

    function requestLoan(uint256 _amount, uint256 _duration) public {
        require(loans[msg.sender].amount == 0, "Active loan exists");
        uint256 interest = calculateInterest(_amount, _duration);

        loans[msg.sender] = Loan(msg.sender, _amount, interest, _duration, false, false);
        emit LoanRequested(msg.sender, _amount, interest, _duration);
    }

    function fundLoan(address _borrower) public {
        Loan storage loan = loans[_borrower];
        require(loan.amount > 0, "Loan does not exist");
        require(!loan.funded, "Loan already funded");

        uint256 lenderBalance = token.balanceOf(msg.sender);
        uint256 allowance = token.allowance(msg.sender, address(this));

        require(lenderBalance >= loan.amount, "Lender does not have enough balance");
        require(allowance >= loan.amount, "Lender has not approved enough tokens");

        bool success = token.transferFrom(msg.sender, _borrower, loan.amount);
        require(success, "Token transfer failed!");

        loan.funded = true;
        emit LoanFunded(msg.sender, _borrower, loan.amount);
    }

    function repayLoan() public {
        Loan storage loan = loans[msg.sender];
        require(loan.funded, "Loan not funded");
        require(!loan.repaid, "Loan already repaid");

        uint256 repaymentAmount = loan.amount + (loan.amount * loan.interest) / 100;
        uint256 borrowerBalance = token.balanceOf(msg.sender);

        require(borrowerBalance >= repaymentAmount, "Insufficient funds for repayment");
        require(token.transferFrom(msg.sender, address(this), repaymentAmount), "Repayment transfer failed");

        loan.repaid = true;
        emit LoanRepaid(msg.sender, repaymentAmount);
        emit LoanHistory(msg.sender, loan.amount, loan.interest, loan.duration, true);
    }

    function calculateInterest(uint256 _amount, uint256 _duration) public pure returns (uint256) {
        uint256 baseRate = 5;
        uint256 durationMultiplier = (_duration / 30);
        return (_amount * (baseRate + durationMultiplier)) / 100;
    }
}
