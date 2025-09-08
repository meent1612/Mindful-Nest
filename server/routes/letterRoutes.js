import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import {
  getLetters,
  createLetter,
  updateLetter,
  deleteLetter,
  checkLetterStatus
} from "../controllers/letterController.js";

const router = express.Router();



// GET all letters
router.get("/", authenticateToken, getLetters);

// POST new letter
router.post("/", authenticateToken, createLetter);

// PUT update letter
router.put("/:id", authenticateToken, updateLetter);

// DELETE letter
router.delete("/:id",authenticateToken, deleteLetter);

// GET letter status
router.get("/:id/status",authenticateToken, checkLetterStatus);

export default router;