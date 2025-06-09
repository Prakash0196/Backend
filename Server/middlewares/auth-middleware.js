const jwt = require("jsonwebtoken")
const User = require("../models/user-model");


const authMiddleWare = async (req,res,next)=>{
  const token = await req.header("Authorization");

  if(!token){
    return res.status(401).json({message: "unauthorized token"})
  }
  console.log("🚀 ~ authMiddleWare ~ token:", token)

  const jwtToken = token.replace("Bearer ", "").trim();
  console.log("🚀 ~ authMiddleWare ~ jwtToken:", jwtToken)

  try {
    const isVerified = jwt.verify(jwtToken, process.env.JWT_SECRET_KEY)
    console.log("🚀 ~ authMiddleWare ~ isVerified:", isVerified)

    const userdata = await User.findOne({email: isVerified.email}).select({password:0})
    console.log("🚀 ~ authMiddleWare ~ userdata:", userdata)

    req.user = userdata;
    req.token = token;
    req.userID = userdata._id

    next()
  } catch (error) {
    return res.status(401).json({message: "Unauthorized. Invalid Token"})
  }

}

module.exports = authMiddleWare