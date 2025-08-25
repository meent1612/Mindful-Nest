import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import journalRoutes from './routes/journalRoutes.js';
import contactRoutes from './routes/ContactRoutes.js';


dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/journal-entries', journalRoutes);
app.use('/api/contact', contactRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));
