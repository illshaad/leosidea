const User = require("../model/user");

const saveUserToBDD = async (req, res) => {
  const user = new User({
    ...req.body,
  });
  user.save();
  res.status(200).json("Vous êtes bien enregistré dans la base de donnée");
};

const getUser = async (req, res) => {
  const users = await User.find({});
  res.status(200).json(users);
};

module.exports = { saveUserToBDD, getUser };
