import {Router} from 'express'; 
import {  
  allCategories,  
  newCategories, 
  deleteCategories,
 } from '../controller/imgCategories.controller.js' 

const router = new Router();  

// localhost:4000/records/all -> Endpunkt 
//router.get('/records/top10', () => { });
router.route('/all').get(allCategories);
router.route('/new').post(newCategories); 
router.route('/:id').delete(deleteCategories);
// router.route('/:id').delete();  

export default router;