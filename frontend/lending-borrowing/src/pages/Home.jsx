import React from "react";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <div className="container text-center mt-5">
        <h1>Welcome to Lending & Borrowing App</h1>
        <p>Decentralized platform for lending and borrowing tokens.</p>
      </div>
    </div>
  );
};

export default Home;
