

const express = require("express")
const router = express.Router()
const services = require("../controlers/service-controller")

router.route("/service").get(services)

module.exports = router 