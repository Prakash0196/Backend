


export const Footer =()=>{
  const date  =new Date()
  const year = date.getFullYear()
  return(
    <><section className="footer">
      <hr />
      <p style={{textAlign:"center", padding: "3rem"}}> Copyright @ Prakash {year} </p>
    </section>
    
    </>
  )
}