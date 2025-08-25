import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import journalRoutes from './routes/journalRoutes.js';

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/journal-entries', journalRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
