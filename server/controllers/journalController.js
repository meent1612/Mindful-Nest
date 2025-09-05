import JournalEntry from "../models/JournalEntry.js";

// @desc    Get all journal entries for user
// @route   GET /api/journal-entries
// @access  Private
export const getJournalEntries = async (req, res, next) => {
  try {
    const entries = await JournalEntry.find({ user: req.user._id })
      .sort({ createdAt: -1 });

    res.status(200).json(entries);
  } catch (error) {
    next(error);
  }
};

// @desc    Create new journal entry
// @route   POST /api/journal-entries
// @access  Private
export const createJournalEntry = async (req, res, next) => {
  try {
    const { title, content, mood } = req.body;

    const journalEntry = await JournalEntry.create({
      title,
      content,
      mood,
      user: req.user._id,
    });

    res.status(201).json(journalEntry);
  } catch (error) {
    next(error);
  }
};

// @desc    Update journal entry
// @route   PUT /api/journal-entries/:id
// @access  Private
export const updateJournalEntry = async (req, res, next) => {
  try {
    let journalEntry = await JournalEntry.findById(req.params.id);

    if (!journalEntry) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    if (journalEntry.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    journalEntry = await JournalEntry.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    res.status(200).json(journalEntry);
  } catch (error) {
    next(error);
  }
};

// @desc    Delete journal entry
// @route   DELETE /api/journal-entries/:id
// @access  Private
export const deleteJournalEntry = async (req, res, next) => {
  try {
    const journalEntry = await JournalEntry.findById(req.params.id);

    if (!journalEntry) {
      return res.status(404).json({ message: "Journal entry not found" });
    }

    if (journalEntry.user.toString() !== req.user._id.toString()) {
      return res.status(401).json({ message: "Not authorized" });
    }

    await JournalEntry.findByIdAndDelete(req.params.id);

    res.status(200).json({ message: "Journal entry removed" });
  } catch (error) {
    next(error);
  }
};
