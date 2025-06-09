

const express = require ("express")
const {getAllUsers,getAllContacts, getAllServices,deleteUserByID,getUserByID,updateUserByID,deleteContactByID,deleteServiceByID} = require("../controlers/admin-controller")
const router = express.Router()
const authmiddleware = require("../middlewares/auth-middleware")
const adminMiddleware = require("../middlewares/admin-middleware")


router.route("/users").get(authmiddleware,adminMiddleware,getAllUsers)
router.route("/users/:id").get(authmiddleware,adminMiddleware,getUserByID)
router.route("/users/update/:id").patch(authmiddleware,adminMiddleware,updateUserByID)
router.route("/users/delete/:id").delete(authmiddleware,adminMiddleware,deleteUserByID)
router.route("/contacts").get(authmiddleware,adminMiddleware,getAllContacts)
router.route("/contacts/delete/:id").delete(authmiddleware,adminMiddleware,deleteContactByID)
router.route("/services").get(authmiddleware,adminMiddleware, getAllServices)
router.route("/services/delete/:id").delete(authmiddleware,adminMiddleware, deleteServiceByID)

module.exports = router;