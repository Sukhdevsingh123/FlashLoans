const express=require('express');
const Loan=require("../Models/Loan");
const Router=express.Router();


Router.post("/addLoans", async (req, res) => {
    try {
      const { name, borrower, amount, duration } = req.body;
  
      if (!name || !borrower || !amount || !duration) {
        return res.status(400).json({ error: "All fields are required" });
      }
  
      const loan = new Loan({ name, borrower, amount, duration });
      await loan.save();
      res.status(201).json({ message: "Loan request submitted!" });
    } catch (error) {
      res.status(500).json({ error: "Failed to submit loan request" });
    }
  });
  



 Router.get("/getLoans",async(req,res)=>{
    try{
        const loans=await Loan.find();
        res.status(200).json(loans);
    }
    catch(error){
        res.status(500).json({message:"Failed to fetch loans"});
    }
 });
 module.exports=Router;