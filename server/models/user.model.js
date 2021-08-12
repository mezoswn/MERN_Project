const mongoose = require("mongoose");
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    firstname: { type: String,
            required: [true,"FirstName is required"], 
            minlength:[3,"FirstName is must be 3 characters"]
        },
    lastname: { type: String,
            required: [true,"LastName is required"], 
            minlength:[3,"LastName is must be 3 characters"]
        },

      email: {
          type: String,
          required: [true, "Email is required"],
          validate: {
            validator: val => /^([\w-\.]+@([\w-]+\.)+[\w-]+)?$/.test(val),
            message: "Please enter a valid email"
          }
          
        },
    phoneNum: { type: String,
            required: [true,"phoneNum is required"], 
            minlength:[10,"phoneNum is must be 10 characters"]
        },

    password: { type: String,
          required: [true,"password is required"], 
            minlength:[8,"Password is must be 8 characters"]
        },
        
    
}, { timestamps: true });

userSchema.virtual('confirmPassword')
.get( () => this._confirmPassword )
.set( value => this._confirmPassword = value );


userSchema.pre('save', function(next) {
  bcrypt.hash(this.password, 10)
  .then(hash => {
      this.password = hash;
      next();
  });
});

userSchema.pre('validate', function(next) {
  console.log(this.password + " ------------------------ " + this.confirmPassword)
  if (this.password !== this.confirmPassword) {
      this.invalidate('confirmPassword', 'Password must match confirm password');
  }
  next();
});

const user = mongoose.model("user", userSchema);
module.exports = {user,userSchema};