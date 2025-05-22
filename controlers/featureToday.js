const {ApiError}=require("../middleware/errorHandler")

const featureToday =async(req,res)=>{
try{
    const API_KEY = process.env.YOUTUBE_API_KEY;
const date = new Date();
date.setDate(date.getDate() - 7);
const publishedAfter = date.toISOString();

fetch(`https://www.googleapis.com/youtube/v3/search?part=snippet&type=video&order=date&publishedAfter=${publishedAfter}&maxResults=20&key=${API_KEY}`)
  .then(response => response.json())
  .then(data => {
if(data){res.status(200).json({success:true,data:data.items})}
else{throw new ApiError("something went wrong",500)}
});
}
catch(e){
    throw new ApiError("internal Error",500)
}

}
module.exports=featureToday