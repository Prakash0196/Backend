import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { useParams } from "react-router-dom";
import { toast } from "react-toastify";


export const AdminContacts = ()=>{


  const [contact, setContact] = useState()

  const {authorizationToken} = useAuth()

  const getContacts = async () => {
    try {
      const response = await fetch("https://server-08sc.onrender.com/api/admin/contacts",{
        method: "GET",
        headers: {
            Authorization: authorizationToken
        }
      })
      console.log("🚀 ~ getContacts ~ response:", response)
      const data = await response.json()
      console.log("🚀 ~ getContacts ~ data:", data)
      setContact(data)
    } catch (error) {
      console.log(error);    
    }
  }

  const deleteContactByID = async (id) => {
    try {
      const response = await fetch(`https://server-08sc.onrender.com/api/admin/contacts/delete/${id}`,{
        method: "DELETE",
        headers:{
          Authorization: authorizationToken
        }
      })
      if(response.ok){
        getContacts()
        toast.success("Message deleted successfully")
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getContacts()
  },[])

  return (
    <>
      <section className="admin-contact-section">
    <div className="container">
      <h1> Contacts messages</h1>
      </div>
      <div className=" admin-contact">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
              <th>Message</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {
          contact?.map((curElem)=>{
            const { _id ,username, email, mobile, message} = curElem
            return <tr key={_id} >
              <td>{username}</td>
              <td>{email}</td>
              <td> {mobile} </td>
              <td> {message}  </td>
              <td> <button className="btn danger-btn" style={{backgroundColor: "red"}} onClick={()=> deleteContactByID(_id)} > delete</button> </td>
            </tr>
          })
        }
          </tbody>
        </table>
      <ul>
        
      </ul>
    </div>
    </section>
    </>
  )
}
