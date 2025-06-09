import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom"
import { useAuth } from "../store/auth";
import { toast } from "react-toastify";


export const Logout = ()=>{

  const {logoutUser} = useAuth()

  const navigate = useNavigate();

  useEffect(()=>{
    logoutUser();
  },[logoutUser])

  return      (navigate("/login"))

  // return <h1>Hello </h1>
}