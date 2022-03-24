import mongoose from "mongoose";


const AdminSchema = new mongoose.Schema({
   
  adminName: {type:String, required: true},
  adminPassword: {type:String, required: true},
  
})

const Photo = mongoose.model('Photos',PhotoSchema, "Photo")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default Photo