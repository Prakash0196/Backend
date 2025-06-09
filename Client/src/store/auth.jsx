import { useEffect } from "react";
import { createContext, useContext, useState } from "react";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

  const [token,setToken] = useState(localStorage.getItem('token'))
  const [user, setUser] = useState( )
  const [service, setService] = useState([])
  const authorizationToken = `Bearer ${token}`
  const storeToken =(serverToken)=>{
    setToken(serverToken);
    return localStorage.setItem("token",serverToken )
  }

  const logoutUser = ()=>{
      setToken("")
      setUser(null);
      return localStorage.removeItem('token')
  }

  const userAuthentication = async (req,res)=>{
    try {
      const response  = await fetch("https://server-08sc.onrender.com/api/auth/user", {
        method: "GET",
        headers: {
          "Authorization": authorizationToken,
        }
      });

      if(response.ok){
        const data = await response.json()
        console.log("🚀 ~ userAuthentication ~ data:", data.message)
        setUser(data.message)
      }

    } catch (error) {
      console.error("Error fetching the deatisld s" );
      
    }
  }


  
  const getServices = async ()=>{
    try {
          const response = await fetch("https://server-08sc.onrender.com/api/data/service",{
      method: "GET",
    })
    console.log("🚀 ~ getServices ~ response:", response)
    if(response.ok){
      const res_data = await response.json()
      console.log("🚀 ~ getServices ~ res_data:", res_data.msg)
      setService(res_data.msg)
      console.log("🚀 ~ AuthProvider ~ service:", service)

    }
 

    } catch (error) {
      console.log("Services front end error: ",error);
      
    }

    
  }



   useEffect(() => {
    getServices()
    if (token) {
      userAuthentication();
    }
  }, [token]);

  let isLoggedIn = !!token;

  return( 
    <AuthContext.Provider value={{isLoggedIn,storeToken,logoutUser, user, service, authorizationToken}}>
        {children}
    </AuthContext.Provider>
  )
}


export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth must be used within an AuthProvider");
  }

  return authContextValue;
};

