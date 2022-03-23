import cloudinary from 'cloudinary';
import 'dotenv/config'; 


cloudinary.config({ 
  cloud_name: process.env.CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY,  
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


 function uploads(file,folder) {
   
  return new Promise(resolve=>{
    cloudinary.uploader.upload(file, (result)=>{
      resolve({
        url: result.url,
        id: result.public_id
      })
    }, {
      resource_type: "auto",
      folder: folder
    })
  })
}

module.exports = {uploads}
