import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"


export const Login = () => {

  const [login, setLogin] = useState(false)

  const {storeToken} = useAuth()

  const navigate = useNavigate()

  const [user, setUser] = useState({
    email: "",
    password: ""
  })

  const handleForm = (e) => {
    const { name, value } = e.target;
    setUser((prev) => ({ ...prev, [name]: value }))
  }

  const handleFormSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch("https://server-08sc.onrender.com/api/auth/login", {
      method: "Post",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(user)
    });

    const res_data = await response.json();
    console.log("🚀 ~ handleFormSubmit ~ res_data:", res_data.msg)

    if (response.ok) {

      // console.log("🚀 ~ handleFormSubmit ~ res_data:", res_data)

      // localStorage.setItem("token", res_data.token)

      storeToken(res_data.token);
      
      toast.success("Login Successful")
      setUser({
        email: "",
        password: ""
      })
      navigate("/")
    }
    else {
  // const errorData = await response.json();
  // console.error("Login failed:", errorData);
  // alert(`Login failed: ${errorData.message || "Invalid credentials"}`);
  toast.error(res_data.msg? res_data.msg: "Invalid email and password")
}
 
  }



  return (
    <>
      <section className="login-form">
        <div className="container grid grid-two-cols">
          <div className="login-img">
            <img src="./dev.png" alt="" />
          </div>
          <div className="login">
            <form onSubmit={handleFormSubmit} >
              <h1>Login Form</h1>
              <div className="login-content">
                <label htmlFor="email">User Name:</label>
                <input type="email" name="email" placeholder="enter the email" required value={user.email} onChange={handleForm} />
              </div>
              <div className="login-content">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="enter your password" required value={user.password} onChange={handleForm} autoComplete="off" />
              </div>
              <button type="submit" className="btn">Login</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
