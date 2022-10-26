// const mongoose = require("mongoose");

// const postSchema = new mongoose.Schema({
//   name: { type: String, required: true },
//   pic: { type: String, default: "http://placekitten.com/350/350" },
//   cuisines: { type: String, required: true },
//   city: { type: String, default: "Anytown" },
//   state: { type: String, default: "USA" },
//   founded: {
//     type: Number,
//     min: [1673, "Surely not that old?!"],
//     max: [new Date().getFullYear(), "This is the future!"],
//   },
//   comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
// });

// postSchema.methods.showEstablished = function () {
//   return `${this.name} has been serving ${this.city}, ${this.state} since ${this.founded}.`;
// };

// module.exports = mongoose.model("Place", postSchema);

const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
  user: { type: String},
  pic: { type: String },
  description: { type: String, required: true },
  title: { type: String, required: true },
  comments: [{ type: mongoose.Schema.Types.ObjectId, ref: "Comment" }],
});

postSchema.methods.showEstablished = function () {
  return `${this.user}`;
};
module.exports = mongoose.model("Post", postSchema);
