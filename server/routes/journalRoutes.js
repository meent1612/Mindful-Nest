import express from 'express';
import {
  getJournalEntries,
  addJournalEntry,
} from '../controllers/journalController.js';

const router = express.Router();

// GET all entries
router.get('/', getJournalEntries);

// POST new entry
router.post('/', addJournalEntry);

export default router;
