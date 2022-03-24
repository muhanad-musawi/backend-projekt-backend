import Admin from '../model/admin.model.js' 
// User

 // post 	↓ 

export  async function  loginAdmin(req,res){   
  const newAdmin = Admin({
    adminName: req.body.adminName,
    adminPassword_ req.body.adminPass

  })
    await photo.save()
    res.status(201).send('There was a new photo added with the '+ req.body.categorie+'categorie.')
  }
}  
// post  ↑
