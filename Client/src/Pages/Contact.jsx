import { useState } from "react"
import { useAuth } from "../store/auth"
import {toast} from "react-toastify"

export const Contact = ()=>{

  
  const [contact, setContact] = useState({
    username: "",
    email: "",
    mobile: "",
    message: ""
  })
  console.log("🚀 ~ Contact ~ contact:", contact)
  
  const {user} = useAuth()
  console.log("🚀 ~ Contact ~ user:", user)

  const [userdata, setUserdata] = useState(true)

  if(userdata && user){
    console.log("Before setting contact:", contact);
    setContact({
      username: user.username,
    email: user.email,
    mobile: user.mobile,
    message: ""
    })
    console.log("After setting contact (will not show new state immediately):", contact);
    setUserdata(false)
  }
 
  const handleForm = (e)=>{
    const {name, value}= e.target;
    setContact((prev)=> ({...prev, [name] : value }))
   }

  const handleSubmitForm = async (e)=>{
      e.preventDefault();
      try {
         const response  = await fetch("https://server-08sc.onrender.com/api/form/",{
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(contact),
      })

      if(response.ok){
        toast.success("Message sent succesfully");
        setContact({
         username: "",
    email: "",
    mobile: "",
    message: ""
      })
      const res_data = await response.json()
      }
      } catch (error) {
        toast.error("Message not send")
        console.log("🚀 ~ handleSubmitForm ~ error:", error) 
      }      
  }

  return (
    <>
      <section className="contact-form">
        <div className="container grid grid-two-cols">
          <div className="contact" style={{marginLeft: "10%"}}>
            <h1>Contact Form</h1>
            <form onSubmit={handleSubmitForm}  >
            <div className="contact-content">
            <label htmlFor="username">Name: </label>
            <input type="text" name="username" placeholder="enter your name"  value={contact.username} onChange={handleForm}  required />
            </div>
            <div className="contact-content">
            <label htmlFor="email">Email:</label>
            <input type="email" name="email" placeholder="enter your email" value={contact.email} onChange={handleForm} required />
            </div>
            <div className="contact-content">
            <label htmlFor="mobile">Mobile:</label>
            <input type="number" name="mobile" placeholder="enter your number" value={contact.mobile} onChange={handleForm} required />
            </div>
            <div className="contact-content">
            <label htmlFor="message">Message:</label>
            <textarea type="message" name="message" placeholder="enter your message" value={contact.message} style={{width:"70%"}} rows={7} onChange={handleForm} required />
            </div>
            {/* <div className="contact-content">
              <label htmlFor="message">Message: </label>
              <textarea name="message" rows={10} cols={50} id="" value={contact.message} onChange={handleForm}  required ></textarea>
            </div> */}
            <button className="btn" type="submit" >Submit</button>
            </form>
          </div>
          <div className="contact-image" style={{margin:"20%"}}>
            <iframe
  src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3500.86077908089!2d77.0535110760919!3d28.663886975647685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zMjjCsDM5JzUwLjAiTiA3N8KwMDMnMjEuOSJF!5e0!3m2!1sen!2sin!4v1748782023806!5m2!1sen!2sin"
  width="600"
  height="450"
  style={{ border: 0 }}
  allowFullScreen=""
  loading="lazy"
  referrerPolicy="no-referrer-when-downgrade"
/>

          </div>
        </div>
      </section>
    </>
  )
}



