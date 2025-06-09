import { Outlet } from "react-router-dom"
import { Footer } from "./Components/Footer"
import Navbar from "./Components/Header"


export const AppLayout = ()=>{
  return <>
    <Navbar />
    <Outlet />
    <Footer />
  </>
}