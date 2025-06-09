import { useState } from "react"
import { useAuth } from "../store/auth"
import {toast} from "react-toastify"
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";


export const AdminUpdate = ()=>{

  const navigate = useNavigate()
    const { id } = useParams();

  const [contact, setContact] = useState({
    username: "",
    email: "",
    mobile: "",
  })
  
  const {user,authorizationToken} = useAuth()

  const handleForm = (e)=>{
    const {name, value}= e.target;
    setContact((prev)=> ({...prev, [name] : value }))
   }

   const getData =async () => {
    try {
      const response = await fetch(`https://server-08sc.onrender.com/api/admin/users/${id}`,{
        method: "GET",
        headers: {
          Authorization: authorizationToken
        }
      })
      console.log("🚀 ~ getData ~ response:", response)
      const data = await response.json()
      console.log("🚀 ~ getData ~ data:", data)
      setContact(data)
    } catch (error) {
      console.log(error);
      
    }
   }

  const handleSubmitForm = async (e)=>{
      e.preventDefault();
      try {
         const response = await fetch(`https://server-08sc.onrender.com/api/admin/users/update/${id}`,{
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
          Authorization: authorizationToken
        },
        body: JSON.stringify(contact)        
      })
      if(response.ok){
        toast.success("Update successful")
        navigate(-1)
      }
      console.log("🚀 ~ adminupdate ~ response:", response)
      const data = await response.json()
      console.log("🚀 ~ handleSubmitForm ~ data:", data)
      } catch (error) {
        console.log("🚀 ~  ~ error:", error) 
      }      
  }

  useEffect(()=>{
    getData()
  },[])

  return (
    <>
      <section className="contact-form">
        <div className="container grid grid-two-cols">
          <div className="contact" style={{marginLeft: "10%"}}>
            <h1>Update User Form</h1>
                  <p>Editing user with ID: {id}</p>
            <form onSubmit={handleSubmitForm}  >
            <div className="contact-content">
            <label htmlFor="username">Name: </label>
            <input type="text" name="username" placeholder="enter your name"  value={contact.username || ""} onChange={handleForm}  required />
            </div>
            <div className="contact-content">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="enter your email" value={contact.email || ""} onChange={handleForm} required />
            </div>
            <div className="contact-content">
            <label htmlFor="mobile">Mobile:</label>
            <input type="number" name="mobile" placeholder="enter your number" value={contact.mobile || ""} onChange={handleForm} required />
            </div>
            {/* <div className="contact-content">
            <label htmlFor="message">Message:</label>
            <textarea type="message" name="message" placeholder="enter your message" value={contact.message} style={{width:"70%"}} rows={7} onChange={handleForm} required />
            </div> */}
            {/* <div className="contact-content">
              <label htmlFor="message">Message: </label>
              <textarea name="message" rows={10} cols={50} id="" value={contact.message} onChange={handleForm}  required ></textarea>
            </div> */}
            <button className="btn" type="submit" >Submit</button>
            </form>
          </div>
        </div>
      </section>
    </>
  )
}



