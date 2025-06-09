 
require("dotenv").config();
const express = require("express")
const cors= require("cors")
const authRoute = require("./router/auth-router")
const contactRoute = require("./router/contact-router")
const serviceRoute = require("./router/service-route")
const adminRoute = require("./router/admin-route")
const connectDB = require("./utils/db");
const errorMiddleware = require("./middlewares/error-middleware");


const app = express();
const corseOptions = {
    origin: "https://client-d2q3.onrender.com",
    methods: "GET, POST, PUT,PATCH, DELETE",
    credentials: true
}

app.use(cors(corseOptions ))

app.use(express.json())
app.use("/api/auth",authRoute)
app.use("/api/form",contactRoute)
app.use("/api/data",serviceRoute)


// for admin route

app.use("/api/admin",adminRoute)


app.use(errorMiddleware)

// app.get("/", (req,res)=>{
//     res.status(200).send("Welcome to user ")
// })

// app.get("/register",(req,res)=>{
//     res.send("Welcome to user registration form")
// })

const port = process.env.PORT || 3000;

connectDB().then(()=>{
app.listen(port,()=>{
    console.log("server is running ");
    
})
})
