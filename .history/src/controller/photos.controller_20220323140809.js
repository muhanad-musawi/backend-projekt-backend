import Photo from '../model/photos.model.js'


// get 	↓
 
// Endpunkt localhost:4000/photo/all 
export  function  allPhotos(req,res) {

  Photo.find({}, (err,photos)=>{
    console.log("Hallo hier bin ich");
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
  console.log('Post data', data);
  // console.log('Post ', data,);

  const file = req.file;
  console.log(file);

  if (!file) {
    return res.status(406).send('Photo is missing')

  }else{
    // const photo =  new Photo({ 
   
    //   photo: file.path:,
      
    // }) 

    // await photo.save()
  
    res.status(201).send('There was a new photo added with the '+ file.name +'categorie.')
  }
}  
// post  ↑

// delet 	↓ 

export  async function  deletePhoto(req,res) { 

  const id = req.params.id
console.log('Id',id);
  const Photo = await  Photo.deleteOne({ _id: id})
if (categories.deletedCount === 0) {
  res.status(404).send( `Id ${id} not found`)
}else{
  res.status(200).json(Photo)
}
} 

// delet  ↑