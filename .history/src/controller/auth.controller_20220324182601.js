import Admin from '../model/admin.model.js' 


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