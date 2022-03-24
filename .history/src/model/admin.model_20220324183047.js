import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema({
   
  adminName: {type:String, required: true},
  adminPassword: {type:String, required: true},
  
})

const Admin = mongoose.model('Ph', AdminSchema, "Admin")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default Admin