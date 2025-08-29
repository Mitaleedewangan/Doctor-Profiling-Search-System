const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true,
        unique:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    password:{
        type:String,
        required:true,

    },
    role:{
        type:String,
         required:true,
    },
   
        location:{
            state:{
                type:String,
                required:true,
            },
            city:{
                type:String,
                required:true,
            },
            pincode:{
                type:String,
                required:true,   
            }
    }
    }
    
);

module.exports = mongoose.model('User',userSchema);