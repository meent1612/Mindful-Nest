import express from "express";
import { checkTextForProblems } from "../controllers/problemController.js";
import { authenticateToken } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/check", authenticateToken, checkTextForProblems);

export default router;

