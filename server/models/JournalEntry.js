import mongoose from 'mongoose';

const JournalEntrySchema = new mongoose.Schema({
  title: { type: String, required: true },
  content: { type: String, required: true },
  mood: { type: String, default: 'neutral' },
  date: { type: Date, default: Date.now },
});

export default mongoose.model('JournalEntry', JournalEntrySchema);
