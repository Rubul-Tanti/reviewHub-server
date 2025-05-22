class ApiError extends Error{
  constructor(message,statuscode){
    super(message)
this.name="ApiError";
this.statuscode=statuscode
  }
}

const asyncErrorHandler=(fn)=>(req,res,next)=>{
  Promise.resolve(fn(req,res,next)).catch(next)
}

const globalErrorHandler=(err,req,res,next)=>{
  console.log(err)
if(err instanceof ApiError){
  res.status(err.statuscode).json({message:err.message,status:"Error"})
}
else if(err.name==="validationError"){
res.status(400).json({
  message:err.message,
status:"Error",
name:err.name
})
}else{
  res.status(500).json({
    status:'Error',
    name:"internal Error",
    message:"An expected error happened"
  })
}
}
module.exports={globalErrorHandler,asyncErrorHandler,ApiError}