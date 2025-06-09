//for zod validation

const validate = (schema) => async (req,res,next)=>{
  try {
    const parseBody = await schema.parseAsync(req.body);
    req.body = parseBody;
    next()
  } catch (error) {
    console.log(error);
    const status =422
    const message = "Fill the details properly"
    const extraDetails = error.errors?.map((err)=> err.message) || ["validation failed"] ;
    // res.status(400).json({message: message})
    const Error = {
      status,
      message,
      extraDetails
    }
    next(Error)
  }
}

module.exports=  validate;