 import {Router} from 'express'; 
 import {   
  registerAdmin , 
   loginAdmin, 
} from '../controller/auth.controller.js' 

const router = new Router();   

// localhost:4000/login -> Endpunkt 

 router.route('/admin/login').post(loginAdmin);  
 
 // Zukunft User Login
 // Zukunft User Login
 

export default router;