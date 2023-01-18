// Modules and Globals
require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose")
const methodOverride = require("method-override");
const db = require("./models");
const userRoutes = require("./user")
const bodyParser = require("body-parser")
const morgan = require("morgan")

//Database connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true
})
.then(()=> console.log('DB connected'))
.catch((err)=> console.log(err));

// Express Settings
app.set("views", __dirname + "/views");
app.set("view engine", "jsx");
app.engine("jsx", require("express-react-views").createEngine());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/api", userRoutes)
app.use(morgan('dev'))
app.use(bodyParser.json())

// Controllers & Routes
app.use("/places", require("./controllers/places"));

app.get("/", (req, res) => {
  db.Post.find()
    .then((posts) => {
      res.render("places/index", { posts });
    })
    .catch((err) => {
      console.log(err);
      res.render("error404");
    });
});

// exports.getSearch = (req, res, next) => { 
//     const title = req.body.title;
//     Product.find({ title: { $regex: title, $options: "i" } })
//         .then(title => {
//             res.render('places/index', {
//             prods:  title ,
//             pageTitle: 'All Post',
//             path: '/places'  
//             });
//         })
//         .catch(err => {
//           console.log(err);
//         });
//     }
// app.post('/', (req, res) => {
 
//   res.send('POST /places')
//    console.log(req.body)
// })

// app.get("*", (req, res) => {
//   res.render("error404");
// });

// Listen for Connections
app.listen(process.env.PORT);
