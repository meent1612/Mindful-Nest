// server.js
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import journalRoutes from './routes/journalRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import problemRoutes from './routes/problemRoutes.js';
import userRoutes from './routes/user.js';
import crisisDataRoutes from './routes/crisisDataRoutes.js';
import letterRoutes from './routes/letterRoutes.js';

// Load environment variables first
dotenv.config();

// Connect to database
connectDb();

const app = express();

// Middleware
app.use(cors({
  origin: process.env.NODE_ENV === 'production' 
    ? ['https://yourdomain.com'] 
    : ['http://localhost:3000', 'http://localhost:3001'],
  credentials: true
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));


// Request logging middleware
app.use((req, res, next) => {
  console.log(`${new Date().toISOString()} - ${req.method} ${req.path}`);
  next();
});

// Routes
app.use('/api/resources', resourceRoutes);
app.use("/api/problems", problemRoutes);
app.use('/api/journal-entries', journalRoutes);
app.use('/api/crisis-data', crisisDataRoutes);
app.use('/api/letters', letterRoutes);
app.use('/api/auth', userRoutes);

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString(),
    environment: process.env.NODE_ENV || 'development'
  });
});

// 404 handler

app.use((req, res) => {
  res.status(404).json({ error: 'Endpoint not found' });
});


// Global error handler
app.use((error, req, res, next) => {
  console.error('Unhandled error:', error);
  res.status(500).json({ 
    error: 'Internal server error',
    ...(process.env.NODE_ENV === 'development' && { details: error.message })
  });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
  console.log(`Environment: ${process.env.NODE_ENV || 'development'}`);
});
