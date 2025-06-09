export const Home = ()=>{
  return (
  <>
    <main>
      <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="section-content">
            <h1>welcome to the elite class</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni velit officia molestiae dolor possimus dicta deleniti sunt quod? Doloribus quisquam explicabo fugit quam eaque impedit nam sequi nulla id.</p>
            <div className=" ">
            <button className="btn">Connect us</button>
            <button className="btn secondary-btn">Learn more</button>
          </div>
          </div>
          <div className="section-image">
            <figure>
              <img src="./main-hero.png" alt="" />
            </figure>
          </div>
          
        </div>
      </section>
      <section className="connections">
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
          <div className="connection-data" style={{lineHeight:"4rem"}} >
            <h1>24/7</h1>
            <p>help support</p>
          </div>
        </div>
      </section>
            <section className="section-hero">
        <div className="container grid grid-two-cols">
          <div className="section-image">
            <figure>
              <img src="./dev.png" alt="" />
            </figure>
          </div>
          <div className="section-content">
            <h1>We are here to help you</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius magni velit officia molestiae dolor possimus dicta deleniti sunt quod? Doloribus quisquam explicabo fugit quam eaque impedit nam sequi nulla id.</p>
            <div className=" ">
            <button className="btn">Connect us</button>
            <button className="btn secondary-btn">Learn more</button>
          </div>
          </div>
          
          
        </div>
      </section>
    </main>
  </>)
}