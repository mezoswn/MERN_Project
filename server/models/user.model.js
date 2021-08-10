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
    lastname: { type: String,
            required: [true,"Name is required"], 
            minlength:[3,"Name is must be 3 characters"]
        },

    firstname: { type: String,
            required: [true,"Name is required"], 
            minlength:[3,"Name is must be 3 characters"]
        },
    lastname: { type: String,
            required: [true,"Name is required"], 
            minlength:[3,"Name is must be 3 characters"]
        },
        
}, { timestamps: true });

const user = mongoose.model("user", userSchema);
module.exports = user;