const {userModle}=require("../Database/dbSchema");
const registerUser=async(req,res)=>{
try{const {email,password}=req.body;
const newUser=await userModle.create({email,password})
if(newUser){
  res.status(200).json({success:true,data:newUser})
}}
catch(e){console.error(e.message)
  res.status(500).json({success:false,message:e.message})
}
}
module.exports=registerUser