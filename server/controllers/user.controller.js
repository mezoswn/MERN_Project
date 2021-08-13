const  user  = require("../models/user.model");
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
require("dotenv").config();

//////find all/////////////

module.exports.findAllusers = (request, response) => {
  user.find({})
    .then(allusers => response.json(allusers))
    .catch(err => response.json({ message: "Something went wrong", error: err }));

};

////////find one/////////////////

module.exports.findOneSingleuser = (req, res) => {
  user.findOne({ _id: req.params.id })
    .then(oneSingleuser => res.json({ user: oneSingleuser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

//////////////create///////////////

// module.exports.createNewuser = (req, res) => {
//   user.create(req.body)
//     .then(newlyCreateduser => res.json({ user: newlyCreateduser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

////////update////////////////////

// module.exports.updateExistinguser = (req, res) => {
//   user.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
//     .then(updateduser => res.json({ user: updateduser }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };

///////////delete//////////////

// module.exports.deleteAnExistinguser = (req, res) => {
//   user.deleteOne({ _id: req.params.id })
//     .then(result => res.json({ result: result }))
//     .catch(err => res.json({ message: "Something went wrong", error: err }));
// };


module.exports.register = (req, res) => {
  console.log("This is the register method: " + req.body);
  user.create(req.body)
    .then(user => {
      const userToken = jwt.sign({
        id: user._id
      }, process.env.FIRST_SECRET_KEY)
      res
        .cookie("usertoken", userToken, {
        httpOnly: true
        })
        .json({ msg: "success!", user: user, token: userToken });
    })
    .catch(err => 
      {
        console.log("errrrrrrrrrrr")
        console.log(err)
        res.status(400).json(err)});
}

module.exports.login = async (req, res) => {
  console.log("asdasd");

  const User = await user.findOne({email: req.body.email })
  .catch(err => res.status(400).json(err));
 if (User === null) {
   console.log("hello")
  return res.sendStatus(400);
}
  const correctPassword = await bcrypt.compare(req.body.password, User.password);
  
  if (!correctPassword) {
    return res.sendStatus(400);
  }
  const UserToken = jwt.sign({
    id: User._id
  }, process.env.FIRST_SECRET_KEY);
  res
    .cookie("Usertoken", UserToken, {
      httpOnly: true
    })
    .json({ msg: "success!", User: User, token: UserToken })

}


module.exports.logout = (req, res) => {
  res.clearCookie('usertoken');
  res.json({ msg: "User Logged Out" });
  res.sendStatus(200);
}


module.exports.authenticate = (req, res, next) => {
  jwt.verify(req.cookies.usertoken, process.env.SECRET_KEY, (err, payload) => {
    if (err) {
      res.status(401).json({ verified: false });
    } else {
      next();
    }
  });
}