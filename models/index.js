require("dotenv").config();
const mongoose = require("mongoose");

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

module.exports.Post = require("./posts");
module.exports.Comment = require("./comment");
module.exports.User = require("./user")
