const express=require('express');
const Loans=require("./Models/Loan")
const connectDB=require('./config/db');
const loanRoutes=require('./routes/loanRoutes');
const cors = require("cors");
const bodyParser = require("body-parser");

const PORT=5000;
const app=express();

// Middleware
app.use(cors());
app.use(bodyParser.json());






connectDB();

app.use("/api", loanRoutes);

app.use("/api",(req,res)=>{
    res.send("Backend connected");

})
app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
})