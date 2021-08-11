const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    firstname: { type: String,
            required: [true,"Name is required"], 
            minlength:[3,"Name is must be 3 characters"]
        },
    lastname: { type: String,
            required: [true,"Name is required"], 
            minlength:[3,"Name is must be 3 characters"]
        },

    email: { type: String,
            required: [true,"Name is required"], 
            minlength:[3,"Name is must be 3 characters"]
        },
    phoneNum: { type: Number,
            required: [true,"phoneNum is required"], 
            minlength:[10,"phoneNum is must be 10 characters"]
        },

    password: { type: String,
          required: [true,"password is required"], 
            minlength:[8,"Name is must be 8 characters"]
        },
        
    
}, { timestamps: true });

const user = mongoose.model("user", userSchema);
module.exports = {user,userSchema};