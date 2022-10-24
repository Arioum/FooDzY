require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");
const passport = require("passport");
const session = require("express-session");
const cookieParser = require("cookie-parser");
//
const app = express();
const PORT = process.env.port || 4000;
const routes = require("./routes/routes");
const authRoute = require("./routes/auth");

//intlizing all the libraries
app.use("/", routes);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(
  cors({
    origin: "http://localhost:3000",
    methods: "GET,POST,PUT,DELETE",
    credentials: true,
  })
);
// app.use("/", authRoute);
app.use(
  session({
    secret: "secretcode",
    saveUninitialized: true,
    resave: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cookieParser("secretcode"));

//
const url = process.env.MONGOLAB_URI;

app.get("/auth/google", (req, res) => {
  passport.authenticate("google", { scope: ["profile"] });
});

app.get("/auth/facebook", (req, res) => {
  passport.authenticate("facebook", { failureRedirect: "/" });
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
