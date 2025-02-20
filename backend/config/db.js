const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/lendingBorrowingDB", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("MongoDB Connected");
  } catch (error) {
    console.error("MongoDB Connection Failed:", error);
    process.exit(1);
  }
};

module.exports = connectDB;



// const dummyLoans = [
//     {
//       name: "Alice Johnson",
//       borrower: "0x123456789abcdef",
//       amount: 5000,
//       duration: 60, // 60 days
//       status: "Pending",
//     },
//     {
//       name: "Bob Smith",
//       borrower: "0xabcdef123456789",
//       amount: 3000,
//       duration: 45,
//       status: "Approved",
//     },
//     {
//       name: "Charlie Brown",
//       borrower: "0xa1b2c3d4e5f67890",
//       amount: 7000,
//       duration: 90,
//       status: "Rejected",
//     }
//   ];
  
// const saveLoan=async()=>{
//     try{
//         await Loans.insertMany(dummyLoans);
//         console.log("Loans added successfully");
//         console.error("Seeding error:", error);
//     }
//     catch(error){

//     }
// }


// saveLoan();