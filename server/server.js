import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import studentRoutes from './routes/route.js';

dotenv.config();
connectDb();

const app = express();
app.use(cors());
app.use(express.json());

app.use('/api/student', studentRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));