import mongoose from 'mongoose';

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  lastName: {
    type: String,
    required: true,
    trim: true,
    maxLength: 50
  },
  email: {
    type: String,
    required: true,
    trim: true,
    lowercase: true,
    match: [/^\w+([.-]?\w+)@\w+([.-]?\w+)(\.\w{2,3})+$/, 'Please enter a valid email']
  },
  location: {
    type: String,
    trim: true,
    maxLength: 100
  },
  comments: {
    type: String,
    required: true,
    trim: true,
    maxLength: 2000
  },
  status: {
    type: String,
    enum: ['new', 'in-progress', 'resolved', 'archived'],
    default: 'new'
  },
  responded: {
    type: Boolean,
    default: false
  },
  responseNotes: {
    type: String,
    trim: true,
    maxLength: 1000
  }
}, {
  timestamps: true
});

// Index for better query performance
contactSchema.index({ email: 1, createdAt: -1 });
contactSchema.index({ status: 1 });

const Contact = mongoose.model('Contact', contactSchema);

export default Contact;