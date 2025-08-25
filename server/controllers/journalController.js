import JournalEntry from '../models/JournalEntry.js';

// @desc   Get all journal entries
// @route  GET /api/journal-entries
export const getJournalEntries = async (req, res) => {
  try {
    const entries = await JournalEntry.find().sort({ date: -1 });
    res.json(entries);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch journal entries' });
  }
};

// @desc   Add new journal entry
// @route  POST /api/journal-entries
export const addJournalEntry = async (req, res) => {
  try {
    const { title, content, mood } = req.body;

    if (!title || !content) {
      return res.status(400).json({ error: 'Title and content are required' });
    }

    const newEntry = new JournalEntry({
      title,
      content,
      mood: mood || 'neutral',
      date: new Date(),
    });

    const savedEntry = await newEntry.save();
    res.status(201).json(savedEntry);
  } catch (error) {
    res.status(500).json({ error: 'Failed to save journal entry' });
  }
};
