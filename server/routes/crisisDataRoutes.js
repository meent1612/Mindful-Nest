import express from 'express';
import { authenticateToken } from '../middleware/authMiddleware.js';
import { getCrisisData, updateCrisisData } from '../controllers/crisisDataController.js';

const router = express.Router();

router.get('/', authenticateToken, getCrisisData);
router.put('/', authenticateToken, updateCrisisData);

export default router;
