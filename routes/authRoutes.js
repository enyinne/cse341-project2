const express = require("express");
const passport = require("passport");

const router = express.Router();

// Login route
router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

// Callback route
router.get(
  "/github/callback",
  passport.authenticate("github", {
    failureRedirect: "/"
  }),
  (req, res) => {
    res.redirect("/");
  }
);

// Logout
router.get("/logout", (req, res) => {
  req.logout(() => {
    res.redirect("/");
  });
});

module.exports = router;