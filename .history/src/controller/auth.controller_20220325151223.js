import Admin from '../model/admin.model.js' 
// User

 // post register	↓ 

export  async function  registerAdmin(req,res){   
  const newAdmin = Admin({
    adminName: req.body.adminName,
    adminPassword: req.body.adminPassword 

  })
  await newAdmin.save()
  res.status(200).send('Admin Register success')
  }
// post  register ↑ 

// post login ↓ 

export  async function  loginAdmin(req,res){   
   const Admin = await  Admin.findOne({ adminName: req.body.adminName , active: true }
  
        if (!Admin) { 
          if (err || admin.adminPassword !== req.body.adminPassword ) { 
      
            res.status(400).send( err + 'Admin login failed')
            
          }else{ 
            await loginAdmin.save() 
            res.status(200).send(`Admin ${req.body.adminName} login success`)
          }
        }

})
  

  // post  login ↑ 