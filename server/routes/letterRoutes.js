import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getLetters,
  createLetter,
  updateLetter,
  deleteLetter,
  checkLetterStatus
} from "../controllers/letterController.js";

const router = express.Router();



// GET all letters
router.get("/", authMiddleware, getLetters);

// POST new letter
router.post("/", authMiddleware, createLetter);

// PUT update letter
router.put("/:id", authMiddleware, updateLetter);

// DELETE letter
router.delete("/:id",authMiddleware, deleteLetter);

// GET letter status
router.get("/:id/status",authMiddleware, checkLetterStatus);

export default router;