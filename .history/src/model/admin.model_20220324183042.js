import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema({
   
  adminName: {type:String, required: true},
  adminPassword: {type:String, required: true},
  
})

const Admin = mongoose.model('Photos', AdminSchema, "P")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default Admin