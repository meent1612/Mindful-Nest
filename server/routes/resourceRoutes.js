import express from 'express';
import {
  getResources,
  getResourcesByCategory,
  createResource
} from '../controllers/resourceController.js';

const router = express.Router();

// Public routes
router.get('/', getResources);
router.get('/category/:category', getResourcesByCategory);

// Admin route (add authentication later)
router.post('/', createResource);

export default router;