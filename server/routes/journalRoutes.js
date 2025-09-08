import express from "express";
import { authenticateToken } from "../middleware/authMiddleware.js";
import {
  getJournalEntries,
  createJournalEntry,
  updateJournalEntry,
  deleteJournalEntry
} from "../controllers/journalController.js";

const router = express.Router();

// GET all entries
router.get("/", authenticateToken, getJournalEntries);

// POST new entry
router.post("/", authenticateToken, createJournalEntry);

// PUT update entry
router.put("/:id", authenticateToken, updateJournalEntry);

// DELETE entry
router.delete("/:id", authenticateToken, deleteJournalEntry);

export default router;
