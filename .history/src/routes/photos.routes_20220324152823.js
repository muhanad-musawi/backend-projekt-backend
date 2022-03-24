import  multer  from 'multer'

 import {Router} from 'express'; 
 import {   
   allPhotos, 
   newPhotos, 
   deletePhoto,
} from '../controller/photos.controller.js' 

const router = new Router();   

const upload = multer({ dest: './public/data/uploads/' })

// localhost:4000/records/all -> Endpunkt 
//router.get('/records/top10', () => { }); 

router.route('c/:selectedCategory').get(allPhotos);
 router.route('/all').get(allPhotos);
 router.route('/new').post( upload.single('uploaded_file'), newPhotos); 
 router.route('/:id').delete(deletePhoto); 


// router.route('/:id').delete();  

export default router;