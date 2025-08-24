import express from "express";
import { getStudent, newStudnet } from '../controllers/studentController.js';
const router = express.Router();

router.get('/', getStudent);
router.post('/',newStudnet);

export default router;