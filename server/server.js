import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import journalRoutes from './routes/journalRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import treatmentRoutes from './routes/treatmentRoutes.js'; 

dotenv.config();
connectDb();

const app = express();

app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));

app.use(express.json());

// Routes
app.use('/api/resources', resourceRoutes);
app.use('/api/journal-entries', journalRoutes);
app.use('/api/treatments', treatmentRoutes); 

// Health check endpoint
app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
