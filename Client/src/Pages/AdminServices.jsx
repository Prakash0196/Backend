import { useEffect, useState } from "react";
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const AdminServices = ()=>{

  const [services, setServices] = useState()

  const {authorizationToken} = useAuth()

  const getServices = async (params) => {
    try {
      const response = await fetch("http://localhost:3000/api/admin/services",{
        method: "GET",
        headers: {
            Authorization: authorizationToken
        }
      })
      const data = await response.json()
      setServices(data)
      
    } catch (error) {
      console.log(error);
      
    }
  }

  const deleteService = async (id) => {
    try {
      const response = await fetch(`http://localhost:3000/api/admin/services/delete/${id}`,{
        method: "DELETE",
        headers:{
          Authorization: authorizationToken
        }
      })
      const data = await response.json()
      console.log("🚀 ~ deleteService ~ data:", data)
      if(response.ok){
        toast.success("service deleted successfully")
        getServices()
      }
    } catch (error) {
      console.log(error);
      
    }
  }

  useEffect(()=>{
    getServices()
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
              {/* <th>S.No</th> */}
              <th>Service</th>
              <th>Provider</th>
              <th>Description</th>
              <th>price</th>
              <th>Delete </th>
            </tr>
          </thead>
          <tbody>
            {
          services?.map((curElem,index)=>{
            const { _id ,provider ,service, price, description} = curElem
            return <tr key={_id} >
              <td>{service}</td>
              <td>{provider}</td>
              <td> {description} </td>
              <td> {price}  </td>
              <td> <button className="btn danger-btn" style={{backgroundColor: "red"}} onClick={()=> deleteService(_id)} > delete</button> </td>
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