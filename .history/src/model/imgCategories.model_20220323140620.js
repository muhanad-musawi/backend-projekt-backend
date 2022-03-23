import mongoose from "mongoose";


const imgCategoriesSchema = new mongoose.Schema({
   
  path: {type:String, required: true},
  
})

const ImgCategories = mongoose.model('ImgCategories',imgCategoriesSchema, "Img-Categories")
//Dritter Parameter fuer den Collection Namen ist freiwillig

export default ImgCategories