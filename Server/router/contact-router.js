
const express = require("express")
const router = express.Router();
const contactForm = require("../controlers/contact-controller")

router.route("/").post(contactForm);

module.exports = router;