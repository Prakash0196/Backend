const Contact = require("../models/contact-model")
const Service = require("../models/service-model")
const User = require("../models/user-model")

const getAllUsers = async (req,res,next) => {
  try {
    const users = await User.find()
    console.log("🚀 ~ getAllUsers ~ user:", users)
    if(!users || users.length === 0){
      return res.status(400).json({message: "No User found"})
    }
    return res.status(200).json(users)
  } catch (error) {
    next(error)
  }
}

const getAllContacts = async (req,res,next) => {
  try {
    const contacts = await Contact.find()
    if(!contacts || contacts.length ===0 ){
      return res.status(400).json({message: "No contacts found"})
    }
    return res.status(200).json(contacts)
  } catch (error) {
    next(error)
  }
}

const getAllServices = async (req,res,next) => {
  try {
    const services = await Service.find()
    if(!services || services.length === 0){
      return res.status(404).json("No Services found")
    }
    return res.status(200).json(services)
  } catch (error) {
    next(error)
  }
}
 
const deleteUserByID = async (req,res) => {
  const id = req.params.id
  await User.deleteOne({_id: id })
  return res.status(200).json({message: "User is deleted successfully "})
}

const getUserByID = async (req,res) => {
  try {
    const id = req.params.id;
    const data = await User.findOne({_id: id})
    return res.status(200).json(data)
  } catch (error) {
    next(error);
  }
}

const updateUserByID =async (req,res,next) => {
  try {
    const id = req.params.id 
    const updatedUserData = req.body

    const updatedUser = await User.updateOne({_id: id},{
      $set: updatedUserData
    })

    return res.status(200).json({message: "User detials updated successfully"})
  } catch (error) {
    next(error)
  }
}

const deleteContactByID = async (req,res) => {
  try {
    const id = req.params.id 
    await Contact.deleteOne({_id: id})
    return res.status(200).json("Message Deleted successfully")
  } catch (error) {
    next (error)
  }
}

const deleteServiceByID = async (req,res,next) => {
  try {
    const id = req.params.id 
    await Service.deleteOne({_id: id})
    return res.status(200).json({message: "service deleted successully"})
  } catch (error) {
    next(error)
  }
}

module.exports = {getAllUsers, getAllContacts, getAllServices,deleteUserByID,getUserByID,updateUserByID,deleteContactByID,deleteServiceByID}