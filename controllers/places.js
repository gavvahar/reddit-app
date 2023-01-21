const router = require("express").Router();
const db = require("../models");

router.get("/new", (req, res) => {
  res.render("places/new");
});


router.get("/", (req, res) => {
  // res.render("places/new");
  db.Post.find()
    .then((posts) => {
      res.render("places/index", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

router.get("/createAccount", (req, res) => {
     
      res.render("places/createAccount")
  
   
});


// router.get("/", (req, res) => {
//   db.Post.find({title: req.params.id})
//     .then((posts) => {
//       res.render("places/searchbar", { posts });
//     })
//     .catch((err) => {
//       console.log(err);
//       res.render("error404");
//     });
// });

router.post("/searchbar", (req, res) => {
  // res.render("places/new");
  console.log(req.body.title);

  const title = req.body.title;
  db.Post.find({ title: { $regex: title, $options: "i" } })

    .then((posts) => {
      res.render("places/searchbar", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});



router.post("/", (req, res) => {
  db.Post.create(req.body)
    .then(() => {
      res.redirect("/places");
    })
    .catch((err) => {
      if (err && err.name == "ValidationError") {
        let message = "Validation Error: ";
        for (var field in err.errors) {
          message += `${field} was ${err.errors[field].value}. `;
          message += `${err.errors[field].message}`;
        }
        console.log("Validation error message", message);
        res.render("places/new", { message });
      } else {
        res.render("error404");
      }
    });
});

router.get("/:id", (req, res) => {
  db.Post.findById(req.params.id)
    .populate("comments")
    .then((post) => {
      console.log(post.comments);
      res.render("places/show", { post });
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.put("/:id", (req, res) => {
  db.Post.findByIdAndUpdate(req.params.id, req.body)
    .then(() => {
      res.redirect(`/places/${req.params.id}`);
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.delete("/:id", (req, res) => {
  db.Post.findByIdAndDelete(req.params.id)
    .then((post) => {
      res.redirect("/places");
    })
    .catch((err) => {
      console.log("err", err);
      res.render("error404");
    });
});

router.get("/:id/edit", (req, res) => {
  db.Post.findById(req.params.id)
    .then((post) => {
      res.render("places/edit", { post });
    })
    .catch((err) => {
      res.render("error404");
    });
});


router.post("/:id/rant", (req, res) => {
  res.send("GET /places/:id/rant stub");
});

router.post("/:id/comment", (req, res) => {
  console.log(req.body);
  db.Post.findById(req.params.id)
    .then((post) => {
      db.Comment.create(req.body)
        .then((comment) => {
          post.comments.push(comment.id);
          post.save().then(() => {
            res.redirect(`/places/${req.params.id}`);
          });
        })
        .catch((err) => {
          res.render("error404");
        });
    })
    .catch((err) => {
      res.render("error404");
    });
});

router.delete("/:id/rant/:rantId", (req, res) => {
  res.send("GET /places/:id/rant/:rantId stub");
});

module.exports = router;
