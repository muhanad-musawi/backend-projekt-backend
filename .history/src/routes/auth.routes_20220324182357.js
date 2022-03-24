 import {Router} from 'express'; 
 import {   
   loginUser, 
} from '../controller/auth.controller.js' 

const router = new Router();   

// localhost:4000/login -> Endpunkt 

 router.route('/user').post(loginUser); 


// router.route('/:id').delete();  

export default router;