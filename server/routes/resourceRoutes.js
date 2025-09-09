import express from 'express';
import {
  getResources,
  getResourceById,
  getResourcesByCategory,
  createResource,
  updateResource,
  deleteResource,
  getFeaturedResources
} from '../controllers/resourceController.js';
import { authenticateToken } from '../middleware/authMiddleware.js';

const router = express.Router();

// Public routes
router.get('/', getResources);
router.get('/featured', getFeaturedResources);
router.get('/category/:category', getResourcesByCategory);
router.get('/:id', getResourceById);

// Protected routes (require authentication)
router.post('/', authenticateToken, createResource);
router.put('/:id', authenticateToken, updateResource);
router.delete('/:id', authenticateToken, deleteResource);

export default router;