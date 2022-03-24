import Admin from '../model/admin.model.js' 
// User

 // post 	↓ 

export  async function  loginAdmin(req,res){   
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
