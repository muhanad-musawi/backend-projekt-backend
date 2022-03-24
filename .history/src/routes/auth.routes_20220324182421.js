 import {Router} from 'express'; 
 import {   
   loginAdmin, 
} from '../controller/auth.controller.js' 

const router = new Router();   

// localhost:4000/login -> Endpunkt 

 router.route('/admin').post(loginAdmin); 
 // Zukunft User Login


// router.route('/:id').delete();  

export default router;