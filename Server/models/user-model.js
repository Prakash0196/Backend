const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken")

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  mobile: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
});

//secure password

userSchema.pre("save", async function (next) {
  console.log(this);
  const user = this; 

  if(!user.isModified("password")){
    next();
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hash_password = await bcrypt.hash(user.password, salt)
    user.password = hash_password;
  } catch (error) {
    console.log(error);
    next(error)  
  }
})

// compare passwords

userSchema.methods.comparePassword = async function (candidatePassword) {
  return await bcrypt.compare(candidatePassword, this.password);
};

//jwt token

userSchema.methods.generateToken = async function () {
  try {
    return jwt.sign({
      userId: this._id.toString(),
      email: this.email,
      isAdmin: this.isAdmin,
    },
    process.env.JWT_SECRET_KEY,
    {
      expiresIn: "30d",
    }
  )
  } catch (error) {
    console.error(error)
  }
}

const User = mongoose.model("User", userSchema);

module.exports = User;
