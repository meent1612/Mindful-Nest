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
      'ADHD', 'Addiction', 'Anxiety', 'Depression', // ADDED Depression
      'PTSD & Trauma', 'Suicide & Self-Harm', 'Stress', // ADDED these
      'General Mental Health', 'Crisis Support', 'Therapy',
      'Self-Care', 'Mindfulness', 'Support Groups' // MAKE SURE ALL ARE INCLUDED
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

export default mongoose.model('Resource', resourceSchema);
