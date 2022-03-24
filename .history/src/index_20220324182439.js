import express from "express";   
import mongoose from "mongoose";  
import morgan from 'morgan'; 
import 'dotenv/config';
import cors from "cors"; 
import imgCategories from './routes/imgCategories.routes.js'  
import photos from './routes/photos.routes.js' 
//import {seedTestData} from '../database.mongoose.js'
 

const PORT = process.env.PORT || 4000;
const app = express();
app.use(
    cors({
     
      credentials: true,
    })
  );
app.use(express.json());

app.use(morgan('tiny'))

console.log(process.env.DB_PASSWORD);
const uri = `mongodb+srv://muhanad-musawi:${process.env.DB_PASSWORD}@cluster0.ymgxp.mongodb.net/photograph?retryWrites=true&w=majority` ;

 mongoose.connect(uri, {useNewUrlParser: true, useUnifiedTopology:true}); 
 
 /*
const connection = mongoose.connection; 
connection.once('open', ()=> { 
    seedTestData()
    console.log("Connection success");
}); 

*/


app.use('/photo-gallery', imgCategories) 

app.use('/photos', photos )

app.use()

//start server 
app.listen(PORT, () => {
    console.log(`server is running at http://localhost:${PORT}`);
});