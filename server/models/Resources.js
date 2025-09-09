import mongoose from 'mongoose';
import validator from 'validator';

const resourceSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true,
    maxlength: [200, 'Title cannot be more than 200 characters']
  },
  url: {
    type: String,
    required: [true, 'URL is required'],
    validate: {
      validator: function(v) {
        return validator.isURL(v, {
          protocols: ['http', 'https'],
          require_protocol: true
        });
      },
      message: 'Please provide a valid URL with http/https'
    }
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: [
      'Mental Health',
      'Health & Wellness', 
      'Relationships',
      'Treatment',
      'Wellness Hub',
      'Crisis Support',
      'Self-Care',
      'Therapy',
      'Meditation',
      'Fitness'
    ]
  },
  description: {
    type: String,
    maxlength: [1000, 'Description cannot be more than 1000 characters'],
    default: ''
  },
  type: {
    type: String,
    enum: ['Website', 'Article', 'Video', 'Podcast', 'App', 'Book', 'Hotline'],
    default: 'Website'
  },
  featured: {
    type: Boolean,
    default: false
  },
  tags: [{
    type: String,
    trim: true,
    maxlength: [30, 'Tags cannot be more than 30 characters each']
  }]
}, {
  timestamps: true
});

// Index for better performance
resourceSchema.index({ category: 1, createdAt: -1 });
resourceSchema.index({ featured: 1, createdAt: -1 });
resourceSchema.index({ title: 'text', description: 'text' });

// Prevent duplicate URLs
resourceSchema.index({ url: 1 }, { unique: true });

export default mongoose.model('Resource', resourceSchema);