const db = require("../models");

db.Post.create([
  {
    user: "nihar",
    title: "H-Thai-ML",
    description: " asdsaashdhajshdjashdjhajd ",
    pic: "/images/large.jpg",
  },
  {
    user: "alex",
    title: "Coding Cat Cafe",
    description: " asdashdhajshdjashdjhajd ",
    pic: "/images/the-interior.jpg",
  },
])
  .then(() => {
    console.log("Success!");
    process.exit();
  })
  .catch((err) => {
    console.log("Failure!", err);
    process.exit();
  });
