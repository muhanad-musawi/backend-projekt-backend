 import {Router} from 'express'; 
 import {   
   loginUser, 
} from '../controller/auth.controller.js' 

const router = new Router();   

// localhost:4000/ -> Endpunkt 
//router.get('/records/top10', () => { }); 

router.route('/category/:selectedCategory').get(allPhotos);
 router.route('/all').get(allPhotos);
 router.route('/new').post( upload.single('uploaded_file'), newPhotos); 
 router.route('/:id').delete(deletePhoto); 


// router.route('/:id').delete();  

export default router;