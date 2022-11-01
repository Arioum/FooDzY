const router = require("express").Router();
const passport = require("passport");

router.post("/auth/google", (req, res) => {
  passport.authenticate("google", { scope: ["profile"] });
});

router.post("/auth/facebook", (req, res) => {
  passport.authenticate("facebook", { failureRedirect: "/" });
});
