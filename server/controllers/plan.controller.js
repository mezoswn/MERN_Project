
const plan = require("../models/plan.model");
const { user } = require("../models/user.model");



module.exports.findAllPlan = (req , res) => {
    plan.find()
    .then(allPlan => res.json( allusers))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
  
  };
  
  ////////find one/////////////////
  
  module.exports.findOnePlan = (req, res) => {
      plan.findOne({ _id: req.params.id })
          .then(oneSingleuser => res.json({ user: oneSingleuser }))
          .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  //////////////create///////////////
  
  module.exports.createNewPlan = (req, res) => {
      const {weight,height,age,condtions,goal}= req.body;
      //must find the user first using the id from the login 
    user.find({id}).then(user => {
        plan.create(weight,height,age,condtions,goal, user)
        .then(newlyCreateduser => res.json({ user: newlyCreateduser }))
        .catch(err => res.json({ message: "Something went wrong", error: err }));
    })
  };
  
  ////////update////////////////////
  
  module.exports.updatePlan = (req, res) => {
    plan.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
      .then(updateduser => res.json({ user: updateduser }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  
  ///////////delete//////////////
  
  module.exports.deleteplan = (req, res) => {
    plan.deleteOne({ _id: req.params.id })
      .then(result => res.json({ result: result }))
      .catch(err => res.json({ message: "Something went wrong", error: err }));
  };
  