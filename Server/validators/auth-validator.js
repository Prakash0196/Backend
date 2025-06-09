const {z } = require("zod")

const signupSchema = z.object({
  username: z
  .string({required_error:"Name is required"})
  .trim()
  .min(3,{message: "Name must have 3 characters"})
  .max(255 , {message: "Name length can not exceed 10 chars"}),
  email: z
  .string({message: "Email is required"})
  .trim()
  .email({message: "Invalid Email address"})
  .min(10, {message: "Email must be of atleast 10 characters"})
  .max(255,{message: "Email cant have this long"}),
  mobile: z
  .string({required_error:"Mobile no. is required"})
  .trim()
  .min(3,{message: "Mobile must have 10 digits"})
  .max(10 , {message: "Mobile length can not exceed 10 chars"}), 
  password: z
  .string({required_error:"password is required"})
  .trim()
  .min(3,{message: "Password must have 3 characters"})
  .max(25 , {message: "Password length can not exceed 10 chars"}),
})

const loginSchema = z.object({
  email: z
  .string({message: "Email is required"})
  .trim()
  .email({message: "Invalid Email address"})
  .min(10, {message: "Email must be of atleast 10 characters"})
  .max(255,{message: "Email cant have this long"}),
  password: z
  .string({required_error:"password is required"})
  .trim()
  .min(3,{message: "Password must have 3 characters"})
  .max(25 , {message: "Password length can not exceed 10 chars"}),
})

module.exports = {signupSchema, loginSchema}; 