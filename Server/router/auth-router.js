const express = require("express");
const router = express.Router();
const authcontrollers = require("../controlers/auth-controler")
const validator = require("../validators/auth-validator")
const validate = require("../middlewares/validate-middlewares")
const authmiddleware = require("../middlewares/auth-middleware")


router.route("/").get(authcontrollers.home);
router.route("/register").post(validate(validator.signupSchema),authcontrollers.register)
router.route("/login").post(validate(validator.loginSchema),authcontrollers.login)
router.route("/user").get(authmiddleware, authcontrollers.user)


module.exports = router;