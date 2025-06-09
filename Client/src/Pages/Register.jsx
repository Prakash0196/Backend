import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth"
import { toast } from "react-toastify"

export const Register = () => {

  const navigate = useNavigate()
  const {storeToken} = useAuth()

  const [user, setuser] = useState({
    username: "",
    email: "",
    mobile: "",
    password: ""
  })

  const handleForm = (e) => {
    const { name, value } = e.target;
    setuser((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmitForm = async (e) => {
    e.preventDefault();
    console.log(user);

    try {
      const response = await fetch("https://server-08sc.onrender.com/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(user),
    });

    const res_data = await response.json();
    console.log("🚀 ~ handleSubmitForm ~ res_data:", res_data)
    if (response.ok) {
      toast.success("Registration successful")
      // console.log("🚀 ~ handleFormSubmit ~ res_data:", res_data)
      // localStorage.setItem("token", res_data.token)
      storeToken(res_data.token)
      setuser({
        username: "",
        email: "",
        mobile: "",
        password: ""
      })
    navigate("/")    }
    else{
  toast.error(res_data.extraDetails? res_data.extraDetails: res_data.message)      
    }
    } catch (errors) {
      console.log("res from server",errors);
      
    }   
  }

  return (
    <>
      <section className="registration-form">
        <div className="container grid grid-two-cols">
          <div className="registration-image">
            <img src="./main-hero.png" alt="" />
          </div>
          <div className="registration">
            <h1>Registration Form</h1>
            <form onSubmit={handleSubmitForm}  >
              <div className="registration-content">
                <label htmlFor="name">Name: </label>
                <input type="text" name="username" placeholder="enter your name" value={user.username} onChange={handleForm} required />
              </div>
              <div className="registration-content">
                <label htmlFor="email">Email:</label>
                <input type="email" name="email" placeholder="enter your email" value={user.email} onChange={handleForm} required />
              </div>
              <div className="registration-content">
                <label htmlFor="mobile">Mobile:</label>
                <input type="number" name="mobile" placeholder="enter your number" value={user.mobile} onChange={handleForm} required />
              </div>
              <div className="registration-content">
                <label htmlFor="password">Password:</label>
                <input type="password" name="password" placeholder="enter your password" value={user.password} onChange={handleForm} required />
              </div>
              {/* <div className="registration-content">
              <label htmlFor="message">Message: </label>
              <textarea name="message" rows={10} cols={50} id="" value={user.message} onChange={handleForm}  required ></textarea>
            </div> */}
              <button className="btn" type="submit" >Register Now </button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}
