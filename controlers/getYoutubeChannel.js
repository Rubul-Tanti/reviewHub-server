const { ApiError } = require("../middleware/errorHandler")
const getYoutubeChannel=async(req,res)=>{
try{
    const apiKey=process.env.YOUTUBE_API_KEY;
const channelName=req.body.channelName;
fetch(`https://youtube.googleapis.com/youtube/v3/channels?part=snippet%2CcontentDetails%2Cstatistics&forHandle=${channelName}&key=${apiKey}`)
.then(data=>data.json())
.then(data=>{if(data){res.status(200).json({success:true,data:data.items})}else{
    throw new ApiError("something went wrong please try again",200)
}})
}

catch(e){
    console.log(e)
}
}
module.exports=getYoutubeChannel