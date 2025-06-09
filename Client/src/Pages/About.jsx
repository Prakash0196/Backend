import { useAuth } from "../store/auth"

export const About = () => {
  

  const {user} = useAuth()
  console.log("🚀 ~ About ~ user:", user)

  
  return (
    <>
      <section className="about-hero">
        <div className="container grid grid-two-cols">
          <div className="about-why">
            <p>Welcome to the class, {user?.username || ""} </p>
            <h1>Why Choose Us?</h1>
            <div className="why-points">
              <div className="why-point">
                <h2>Expert Instructors:</h2>
                <p>Learn from industry professionals with real-world experience.</p>
              </div>
              <div className="why-point">
                <h2>Interactive Learning:</h2>
                <p>Engage with hands-on projects and real-time problem solving.</p>
              </div>
              <div className="why-point">
                <h2>Flexible Schedule:</h2>
                <p>Attend classes online or offline at your convenience.</p>
              </div>
              <div className="why-point">
                <h2>Career Support:</h2>
                <p>Get mentorship, resume help, and job placement assistance.</p>
              </div>
            </div>
            <div className=" ">
              <button className="btn">Connect us</button>
              <button className="btn secondary-btn">Learn more</button>
            </div>
          </div>
          <div className="about-image">
            <figure>
              <img src="./main.png" alt="" />
            </figure>
          </div>

        </div>
      </section>
      <section className="connections mb-2">
        <div className="container grid grid-four-cols">
          <div className="connection-data">
            <h1>50+</h1>
            <p>registered companies</p>
          </div>
          <div className="connection-data">
            <h1>100,00+</h1>
            <p>happy clients</p>
          </div>
          <div className="connection-data">
            <h1>500+</h1>
            <p>well known developers</p>
          </div>
          <div className="connection-data" style={{lineHeight:"4rem"}}>
            <h1>24/7</h1>
            <p>help support</p>
          </div>
        </div>
      </section>
    </>
  )
}