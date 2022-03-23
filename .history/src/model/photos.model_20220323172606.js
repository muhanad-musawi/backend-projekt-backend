import mongoose from "mongoose";


const PhotoSchema = new mongoose.Schema({
   
  path: {type:String, required: true},
  categorie: {type:_}
  
})

const Photo = mongoose.model('Photos',PhotoSchema, "Photo")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default Photo