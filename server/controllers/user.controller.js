const user = require("../models/user.model");

//////find all/////////////

module.exports.findAllusers = (req , res) => {
  user.find()
  .then(allusers => res.json( allusers))
  .catch(err => res.json({ message: "Something went wrong", error: err }));

};

////////find one/////////////////

module.exports.findOneSingleuser = (req, res) => {
	user.findOne({ _id: req.params.id })
		.then(oneSingleuser => res.json({ user: oneSingleuser }))
		.catch(err => res.json({ message: "Something went wrong", error: err }));
};

//////////////create///////////////

module.exports.createNewuser = (req, res) => {
  user.create(req.body)
    .then(newlyCreateduser => res.json({ user: newlyCreateduser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

////////update////////////////////

module.exports.updateExistinguser = (req, res) => {
  user.findOneAndUpdate({ _id: req.params.id }, req.body, { new: true })
    .then(updateduser => res.json({ user: updateduser }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

///////////delete//////////////

module.exports.deleteAnExistinguser = (req, res) => {
  user.deleteOne({ _id: req.params.id })
    .then(result => res.json({ result: result }))
    .catch(err => res.json({ message: "Something went wrong", error: err }));
};

