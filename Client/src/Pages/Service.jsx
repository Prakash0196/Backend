 import { useAuth } from "../store/auth"

export const Service = () => {

  const { service } = useAuth()
  console.log("🚀 ~ Service ~ service:", service)

  return (
    <>
      <section className="services">
        <div className="container">
          <h1 className="main-heading">services</h1>
          <div className=" container grid grid-three-cols">
            {
              service.map((curElem,index) => {
                return (
                  <>
                    <li key={index} style={{border: "1px solid white", gap: "3rem", display:'flex', padding: "3rem",margin: "2rem"}} >
                      <div className="card">
                        <div className="card-img">
                          <img src="./dev.png" width="300" alt="" />
                        </div>
                        <div className="card-details">
                          <div className="grid grid-two-cols" style={{display: "flex", justifyContent: "space-between"}}>
                            <p>{curElem.provider}</p>
                            <p>{curElem.price}</p> 
                          </div>
                          <h1>{curElem.service}</h1>
                          <p>{curElem.description}</p>
                        </div>
                      </div>
                    </li>

                  </>
                )
              })
            }

          </div>
        </div>
      </section>
    </>)
}