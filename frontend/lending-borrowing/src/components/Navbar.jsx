import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" to="/">LendingBorrowingApp</Link>
        <div>
          <Link className="btn btn-outline-light mx-2" to="/borrower">Borrower Dashboard</Link>
          <Link className="btn btn-outline-light" to="/lender">Lender Dashboard</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

