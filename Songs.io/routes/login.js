var express = require('express');
var router = express.Router();

// login route
router.get("/login", function (req, res) {
  res.render('login', {
    user: req.user,
    title: "login",
  });
});



module.exports = router;