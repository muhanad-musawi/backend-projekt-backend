 import {Router} from 'express'; 
 import {   
   loginAdmin, 
} from '../controller/auth.controller.js' 

const router = new Router();   

// localhost:4000/login -> Endpunkt 

 router.route('/adminl').post(loginAdmin); 
 // Zukunft User Login
 

export default router;