import Admin from '../model/admin.model.js' 
// User

 // post 	↓ 

export  async function  loginAdmin(req,res){   
  const newAdmin = Admin({
    uName: req.body.userName,

  })
    await photo.save()
    res.status(201).send('There was a new photo added with the '+ req.body.categorie+'categorie.')
  }
}  
// post  ↑
