import express from "express";
import { authMiddleware } from "../middleware/authMiddleware.js";
import {
  getJournalEntries,
  createJournalEntry,
  updateJournalEntry,
  deleteJournalEntry
} from "../controllers/journalController.js";

const router = express.Router();

// GET all entries
router.get("/", authMiddleware, getJournalEntries);

// POST new entry
router.post("/", authMiddleware, createJournalEntry);

// PUT update entry
router.put("/:id", authMiddleware, updateJournalEntry);

// DELETE entry
router.delete("/:id", authMiddleware, deleteJournalEntry);

export default router;
