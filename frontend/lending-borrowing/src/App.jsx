import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import BorrowerDashboard from "./pages/BorrowerDashboard";
import LenderDashboard from "./pages/LenderDashboard";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/borrower" element={<BorrowerDashboard />} />
        <Route path="/lender" element={<LenderDashboard />} />
      </Routes>
    </Router>
  );
};

export default App;

