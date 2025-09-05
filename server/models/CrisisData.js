import mongoose from 'mongoose';

const EmergencyContactSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true
  },
  phone: {
    type: String,
    required: true,
    trim: true
  },
  relationship: {
    type: String,
    required: true,
    trim: true
  }
});

const CrisisDataSchema = new mongoose.Schema({
  emergencyContacts: [EmergencyContactSchema],
  personalReminders: [{
    type: String,
    trim: true
  }],
  copingStrategies: [{
    type: String,
    trim: true
  }],
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true,
    unique: true
  }
}, {
  timestamps: true
});

export default mongoose.model('CrisisData', CrisisDataSchema);