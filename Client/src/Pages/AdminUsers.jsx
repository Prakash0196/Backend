import { useEffect } from "react"
import { useAuth } from "../store/auth"
import { useState } from "react"
import { Link } from "react-router-dom"


export const AdminUsers = ()=>{

  const [users, setUsers] = useState()

  const {authorizationToken} = useAuth()


  const getAllUsers= async () => {
    try {
      const response = await fetch("https://server-08sc.onrender.com/api/admin/users",{
        method: "GET",
        headers: {
            Authorization: authorizationToken
        }
        
      })
      const data = await response.json()
      console.log("🚀 ~ getAllUsers ~ data:", data)
      setUsers(data)
    } catch (error) {
      console.log("🚀 ~ getAllUsers ~ error:", error) 
    }
  }

  const deleteUser = async (id)=>{
    try {
      const response = await fetch(`https://server-08sc.onrender.com/api/admin/users/delete/${id}`,{
        method: "DELETE",
        headers: {
            Authorization: authorizationToken
        }
        
      })
      const data = await response.json()
      console.log("🚀 ~ afterdelete ~ data:", data)
      if(response.ok){
        getAllUsers()
        toast.success("User deleted successfully")
      }
    } catch (error) {
      console.log("🚀 ~ deleteUser ~ error:", error)
      
    }
  }

  useEffect(()=>{
    getAllUsers();
  },[])

  return (
    <section className="admin-users-section">
    <div className="container">
      <h1>Admin Users data</h1>
      </div>
      <div className=" admin-users">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone No.</th>
                  <th>Admin</th> {/* 👈 Add this column */}
              <th>Edit</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {
          users?.map((curElem)=>{
            const { _id ,username, email, mobile,isAdmin} = curElem
            return <tr key={_id} >
              <td>{username}</td>
              <td>{email}</td>
              <td> {mobile} </td>
                        <td>{isAdmin ? "✅ Yes" : "❌ No"}</td> {/* 👈 Show isAdmin clearly */}
              <td> <Link to={`/admin/users/${_id}/edit`} ><button className="btn"> Edit </button></Link>  </td>
              <td> <button className="btn danger-btn" style={{backgroundColor: "red"}}  onClick={()=> deleteUser(_id)} > delete</button> </td>
            </tr>
          })
        }
          </tbody>
        </table>
      <ul>
        
      </ul>
    </div>
    </section>
  )
}
