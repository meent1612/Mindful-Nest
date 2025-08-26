import mongoose from 'mongoose';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    maxLength: 200,
    trim: true
  },
  url: {
    type: String,
    required: true
  },
  category: {
    type: String,
    required: true,
    enum: [
      'ADHD', 'Addiction', 'Anxiety', 'Depression', 
      'PTSD & Trauma', 'Suicide & Self-Harm', 'Stress',
      'General Mental Health', 'Crisis Support', 'Therapy',
      'Self-Care', 'Mindfulness', 'Support Groups'
    ]
  },
  description: {
    type: String,
    maxLength: 500,
    trim: true
  },
  type: {
    type: String,
    enum: ['Article', 'Video', 'Hotline', 'App', 'Book', 'Website', 'Podcast'],
    default: 'Website'
  },
  featured: {
    type: Boolean,
    default: false
  }
}, {
  timestamps: true
});

const Resource = mongoose.model('Resource', resourceSchema);
export default Resource;