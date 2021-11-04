const User = require("../model/user");

saveUserToBDD = async (req, res) => {
  console.log(req.body);
  const user = new User({
    ...req.body,
  });
  user.save();
  res.status(200).json(user);
};

module.exports = { saveUserToBDD };
