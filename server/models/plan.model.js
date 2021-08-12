const mongoose = require("mongoose");
const UserSchema=require("./user.model").userSchema;


const planSchema = new mongoose.Schema({

    weight: { type: Number,
        required: [true,"weight is required"], 
        
    },
    height: { type: Number,
        required: [true,"height is required"], 
        
    },
    age:{ type:Number,
        require:[true,"age is required"]

    },

    condtions:{type:String,
        require:[true,"condtion is required"]

    },

    goal:{type:String,
        require:[true,"goal is required"]

    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "user"
    }

})
const plan = mongoose.model("plan", planSchema);
module.exports = plan;