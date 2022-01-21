let mongoose = require("mongoose");
let Schema = mongoose.Schema;

const userSchema = new Schema({
  date: Date,
  password: String,
  name: String,
});
module.exports = mongoose.model("user", userSchema);
