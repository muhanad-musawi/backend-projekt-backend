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
   const loginAdmin = Admin.findOne({ adminName: req.body.adminName }, function(err, admin) {
//check the passwords 
    if (err || admin.adminPassword !== req.body.adminPassword ) { 
      
      res.status(400).send( err + 'Admin login failed')
      
    }else{ 
      await loginAdmin.save() 
      res.status(200).send(`Admin ${req.body.adminName} login success`)
    }
})
  

  // post  login ↑ 