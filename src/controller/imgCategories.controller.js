
import ImgCategories from '../model/imgCategories.model.js'
// Endpunkt localhost:4000/photo-gallery/all
export  function  allCategories(req,res) {
  //Records ist unser Model aus MongoDB, welches wir in Mongoose erstellen
  //Mit der FIND Methode suchen wir in der record-shop Collection
  //Die Rückgabe vom FIND gibt dir entweder Fehler zurück (err) ODER ein Erfolgsparameter(records)
  ImgCategories.find({}, (err,records)=>{
    console.log("Hallo hier bin ich");
    if(err){
      res.status(401).send(err);
    } else {
      res.status(200).send(records)
    }
  }) 
}  
 
export  async function  newCategories(req,res){   
  const data = req.body 

  if (!data.categorie) {
    return res.status(406).send('Categorie is missing')
  }else{

    const categorie =  new ImgCategories({ 
   
      categorie: data.categorie,
      
    }) 

    await categorie.save()
  
    res.status(201).send('There was a new categorie added with the '+ data.categorie+'categorie.')
  }
}  

export  async function  deleteCategories(req,res) { 

  const id = req.params.id
console.log('Id',id);
  const categories = await  ImgCategories.deleteOne({ _id: id})
if (categories.deletedCount === 0) {
  res.status(404).send( `Id ${id} not found`)
}else{
  res.status(200).json(categories)
}
}
