import Admin from '../model/admin.model.js' 
// User

 // post 	↓ 

export  async function  loginAdmin(req,res){   
  const newAdmin = Admin({
    adminName: req.body.adminName,
    adminPassword: req.body.adminPassword
  })
    await newAdmin.save()
    res.status(200).send('')
  }
}  
// post  ↑
