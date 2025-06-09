import { Navigate, NavLink, Outlet } from "react-router-dom"
import Navbar from "../Components/Header"
import { Footer } from "../Components/Footer"
import { LuUsersRound } from "react-icons/lu";
import { IoMdContact } from "react-icons/io";
import { MdMedicalServices } from "react-icons/md";
import { IoMdHome } from "react-icons/io";
import { useAuth } from "../store/auth";



export const AdminLayout = () => {

  const {user} = useAuth()
  if(!user.isAdmin){
    return <Navigate to="/" />
  }
  return (
    <>
      <Navbar />
      <div className="container admin-nav">
        <h1 style={{ fontSize: "6rem" }}>Admin Panel</h1>
        <nav>
          <ul>
            <li> <NavLink to="/admin/users"   > <LuUsersRound />  users</NavLink> </li>
            <li> <NavLink to="/admin/contacts"  > <IoMdContact />contacts</NavLink> </li>
            <li> <NavLink to="/admin/services"  > <MdMedicalServices /> services</NavLink> </li>
            <li> <NavLink to="/"  > <IoMdHome />  home</NavLink> </li>
          </ul>
        </nav>
        <Outlet />
      </div>

      <Footer />
    </>
  )
} 