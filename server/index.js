require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session")


//
const app = express();
const PORT = process.env.port || 3000;
const routes = require("./routes/routes");

//intlizing all the libraries
app.use(bodyParser.json());
app.use(cors());
app.use("/", routes);
app.use(
  session({
    secret: "oneboy",
    saveUninitialized: true,
    resave: true,
  })
);

//
const url = process.env.MONGOLAB_URI;

app.get("/auth/google", (req, res) => {
  passport.authenticate("google", { scope: ["profile"] });
});

app.get("/auth/facebook", (req, res) => {
  passport.authenticate("facebook", { failureRedirect: "/login" });
});

//connecting to mongodb
mongoose
  .connect(url, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(`Error occured while Connecting ${err}`));

// LISTEN TO PORT ON
app.listen(PORT, () => {
  console.log(`server is running on ${PORT}`);
});
