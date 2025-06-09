const Service = require("../models/service-model")


const services = async(req,res)=>{
  try {
    const response  = await Service.find();
    if(!response){
      res.status(401).json("No Service found")
    }
    res.status(200).json({msg : response});
    return

  } catch (error) {
    console.log("Error in controller : ", error);
    
  }
}

module.exports = services