import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema({
   
  adminName: {type:String, required: true},
  adminPassword: {type:String, required: true}, 
  active: 
  
})

const Admin = mongoose.model('Admin', AdminSchema, "Admin")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default Admin