var express = require("express");
var router = express.Router();

/* GET home page. */
const messages = [
	{
		text: "Hi there!",
		user: "Amando",
		added: new Date(),
	},
	{
		text: "Hello world!",
		user: "Charles",
		added: new Date(),
	},
];

router.get("/", function (req, res, next) {
	res.render("index", { title: "Mini Messageboard", messages: messages });
});

router.get("/new", function (req, res, next) {
	res.render("form", { title: "FORM" });
});

router.post("/new", function (req, res, next) {
	messages.push({
		text: req.body.Message,
		user: req.body.Name,
		added: new Date(),
	});
	res.redirect("/");
});

module.exports = router;
