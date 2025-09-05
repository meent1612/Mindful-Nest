import express from "express";
import { checkTextForProblems } from "../controllers/problemController.js";
import { authMiddleware } from "../middleware/authMiddleware.js";

const router = express.Router();


router.post("/check", authMiddleware, checkTextForProblems);

export default router;

