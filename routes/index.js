var express = require("express");
var router = express.Router();

const messages = [
  { text: "Hi there!", user: "Amando", added: new Date() },
  { text: "Hello World!", user: "Charles", added: new Date() },
];

/* GET home page. */
router.get("/", function (req, res, next) {
  res.render("index", { title: "Express MessageBoard", messages: messages });
});

router.get("/new", function (req, res, next) {
  res.render("form");
});

router.post("/new", function (req, res, next) {
  console.log(req.body);
  const msgText = req.body.message;
  const author = req.body.author;
  messages.push({text: msgText, user: author, added: new Date()});
  res.redirect('/');
});

module.exports = router;
