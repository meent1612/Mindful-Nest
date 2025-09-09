import mongoose from 'mongoose';

const CrisisDataSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true, unique: true },
  emergencyContacts: [
    { name: String, phone: String, relationship: String }
  ],
  personalReminders: [String],
  copingStrategies: [String]
});

export default mongoose.model('CrisisData', CrisisDataSchema);
