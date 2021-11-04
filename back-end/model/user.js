const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  firstName: String,
  lastName: String,
  birthday: String,
});

const dataModelUser = mongoose.model("user", userSchema);

module.exports = dataModelUser;
