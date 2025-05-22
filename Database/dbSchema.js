const mongoose=require("mongoose")
const youtubersListSchema=new mongoose.Schema({
name:{
  type:String,
  require:true,
}
,channelurl:{
  type:String,
  require:true
},
nation:{
  type:String,
  require:true
},
catagory:{
  type:String,
  require:true
}
})
const youtuberlistModel=mongoose.model("youtuberList",youtubersListSchema)

const userSchema=new mongoose.Schema({
  email:{
    type:String,
    require:true
  },
  username:{
  type:String,
  unique:true,
  maxLength:[8,'username cannot have more than 8 letters'],
minLength:[5,"username cannnot have less than 5 letters"]  
},
password:{
  type:String,
  require:true,
  maxLength:[12,'password cannot be more than 12 letters'],
  minLength:[8,'password cannot be less than 8 letters']
},
profilePicture:{
  type:String  
},
nation:{
  type:String,
}
,age:{type:String},
occupation:{
  type:String
}

})
const userModle=mongoose.model('user',userSchema)

module.exports= {userModle,youtuberlistModel}