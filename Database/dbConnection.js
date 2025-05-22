const mongoose=require("mongoose")
const connectToDB=async()=>{
 await mongoose.connect(process.env.MONGOURL)
  .then(console.log("connected to data base"))
}
module.exports=connectToDB