import Photo from '../model/photos.model.js' 
import uploads from "./cloudinaryUploader.js";
// get 	↓
 
// Endpunkt localhost:4000/photo/all 
export  function  allPhotos(req,res) {


  const id = req.params.id
  Photo.find({}, (err,photos)=>{
    //console.log("Hallo hier bin ich");
    if(err){
      res.status(401).send(err);
    } else {
      res.status(200).send(photos)
    }
  }) 
}  

// get 		↑

 // post 	↓ 

export  async function  newPhotos(req,res){   
  const data = req.body  
  //console.log('Post data', data);

  const file = req.file;
  //console.log("file"+file);

  if (!file) {
    return res.status(406).send('Photo is missing')
  }else{
    //const uploader = uploads(file.path, "Images");
    const cloudinaryUpload = await uploads(file.path, "Images");
    //console.log("cloudinary"+cloudinaryUpload)
    //console.log("cloudinaryulr"+cloudinaryUpload.url)
    console.log("categorie"+ req.body.photoCategorie)
    const photo =  new Photo({ 
      path: cloudinaryUpload.url,
      photoCategorie: req.body.photoCategorie,
    }) 

    await photo.save()
    res.status(201).send('There was a new photo added with the '+ req.body.categorie+'categorie.')
  }
}  
// post  ↑

// delet 	↓ 

export  async function  deletePhoto(req,res) { 

  const id = req.params.id
console.log('Id',id);
  const result = await  Photo.deleteOne({ _id: id})
if (result.deletedCount === 0) {
  res.status(404).send( `Id ${id} not found`)
}else{
  res.status(200).json('Photo deletet')
}
} 

// delet  ↑