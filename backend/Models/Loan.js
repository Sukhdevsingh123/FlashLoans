const mongoose = require('mongoose');


const LaonSchema = new mongoose.Schema({
    name: {                           //borrower name
        type: "String",
        required: true
    },
    borrower: {                        //borrower wallet address
        type: String,
        required: true
    },
    amount: {                             //amount of loan
        type: Number,
        required: true
    },
    duration: {                         //duration of loan
        type: Number,
        required: true
    },
    status: {                         //fulfiull or pending
        type: String,
        default: "pending"
    },
    createdAt: {
        type: Date,
        default: Date.now
    }


})


module.exports=mongoose.model('Loan',LaonSchema);


