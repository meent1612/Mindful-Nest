import express from 'express';
import {
  getResources,
  getResourcesByCategory,
  createResource
} from '../controllers/resourceController.js';

const router = express.Router();


router.get('/', getResources);
router.get('/category/:category', getResourcesByCategory);

router.post('/', createResource);

export default router;