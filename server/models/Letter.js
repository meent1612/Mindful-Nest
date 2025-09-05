import mongoose from 'mongoose';

const LetterSchema = new mongoose.Schema({
  title: { 
    type: String, 
    required: true,
    trim: true,
    maxlength: 100
  },
  content: { 
    type: String, 
    required: true 
  },
  recipientType: { 
    type: String, 
    required: true,
    enum: ['future-self', 'past-self', 'loved-one', 'friend', 'family', 'other'],
    default: 'future-self'
  },
  lockUntil: { 
    type: Date,
    default: null
  },
  isLocked: {
    type: Boolean,
    default: false
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', 
    required: true 
  }
}, {
  timestamps: true
});

// Check if letter should be locked based on lockUntil date
LetterSchema.methods.checkLockStatus = function() {
  if (this.lockUntil && new Date() < this.lockUntil) {
    this.isLocked = true;
  } else {
    this.isLocked = false;
  }
  return this.isLocked;
};

export default mongoose.model('Letter', LetterSchema);