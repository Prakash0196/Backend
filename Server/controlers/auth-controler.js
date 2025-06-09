const User = require("../models/user-model");

const home = async (req, res) => {
    try {
        res.status(200).send("Welcome to user by router  by controller")

    } catch (error) {
        console.log(error);
        next(error)
    }
}

const register = async (req, res) => {
    try {

        const { username, email, mobile, password } = req.body;

        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ msg: "User already registered" });
        }

        

        const newUser = await User.create({ username, email, mobile, password });
        res.status(201).json({ 
             message: "registration succesful",
             token: await newUser.generateToken(), 
             userId: newUser._id.toString() });


    } catch (error) {
        res.status(500).json({ error: error.message });
        console.error("❌ Register error:", error);
    }
}


const login = async (req, res) => {
    try {

        const {email,  password } = req.body; 
 
        const userExist = await User.findOne({ email });
        console.log("🚀 ~ login ~ userExist:", userExist)
        if (!userExist) {
            return res.status(400).json({ msg: "Invalid Credentials" });
        }

        // const user  = await bcrypt.compare(password, userExist.password)

        const user = await userExist.comparePassword(password);

        if(user){
            res.status(200).json({
                message: "Login Successful",
                token: await userExist.generateToken(),
                userId: userExist._id.toString(),
            }) 
        }
        else{
            res.status(401).json({
                message: "Invalid password", 
            })
        }
    } catch (error) {
        // res.status(500).json({ error: error.message });
        const message = "Please fill the required details"
        const extraDetails = error.message
        const Error = {
            message,
            extraDetails
        }
        next(Error)
        console.error("❌ Register error:", error);
    }
}


const user = async (req,res)=>{
    try {
        const userdata = req.user ;
        console.log("🚀 ~ user ~ userdata:", userdata)
        return res.status(200).json({message: userdata})
        
    } catch (error) {
    console.log("🚀 ~ user ~ error from the route:", error)
    }
}

module.exports = { home, register,login, user }