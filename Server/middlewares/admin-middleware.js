

const adminMiddleware = async (req,res,next) => {
  try {
    // console.log(req.user);
    const adminRole = req.user.isAdmin
    if(!adminRole){
      return res.status(403).json("Access Denied! User is not an admin")
    }
    next();
    // res.status(200).json({message: req.user.isAdmin})
  } catch (error) {
    next(error)
  }
}

module.exports = adminMiddleware