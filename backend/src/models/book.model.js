const mongoose = require('mongoose');


const bookSchema = new mongoose.Schema({
    email:{type:String},
    uid:{type:mongoose.Schema.Types.ObjectId,ref:'user'},
    seats:[{type:String}],
    howmanySeats:{type:Number},
    theater:{type:mongoose.Schema.Types.ObjectId,ref:'theater'},
    amount:{type:Number},
    paymnetStatus:{type:Boolean},
    paymentMode:{type:String},    
    phoneNumber:{type:String},
    ticketType:{type:String},
    dateOfBooking:{type:String},
    timeOfShow:{type:String},
    orderStatus:{type:String}
},{
    versionKey:false,
    timestamps:true
});

const Book = mongoose.model("booking",bookSchema);
module.exports=Book;