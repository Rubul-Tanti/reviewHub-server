const {ApiError}=require("../middleware/errorHandler")

const treandingToday=async(req,res)=>{
try{  
    let apiKey=process.env.YOUTUBE_API_KEY
         const regionCode = 'IN'; // Change as needed
      const maxResults = 16;
   const url = `https://www.googleapis.com/youtube/v3/videos?part=snippet&chart=mostPopular&regionCode=${regionCode}&maxResults=${maxResults}&key=${apiKey}`;
      fetch(url)
      .then(data=>data.json())
        .then(data => {
          if (!data){throw new ApiError("something went wrong",500)}
      if(data){res.status(200).json({success:true,data:data.items})}
        })
        
}catch(e){
   throw new ApiError("something went wrong",500);
}

}
module.exports=treandingToday