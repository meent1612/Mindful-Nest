import mongoose from 'mongoose';

const JournalEntrySchema = new mongoose.Schema(
  {
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',   // reference to the User model
      required: true
    },
    title: { type: String, required: true },
    content: { type: String, required: true },
    mood: { type: String, default: 'neutral' },
    date: { type: Date, default: Date.now },
  },
  {
    timestamps: true   // adds createdAt and updatedAt fields automatically
  }
);

export default mongoose.model('JournalEntry', JournalEntrySchema);
