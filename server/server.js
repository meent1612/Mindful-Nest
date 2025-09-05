import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import connectDb from './db/connect.js';
import journalRoutes from './routes/journalRoutes.js';
import resourceRoutes from './routes/resourceRoutes.js';
import problemRoutes from './routes/problemRoutes.js';
import user from './routes/user.js';
import crisisDataRoutes from './routes/crisisDataRoutes.js';
import letterRoutes from './routes/letterRoutes.js';
dotenv.config();
connectDb();

const app = express();


app.use(cors({
  origin: 'http://localhost:3000', 
  credentials: true
}));

app.use(express.json());


app.use('/api/resources', resourceRoutes);
app.use("/api/problems", problemRoutes);
app.use('/api/journal-entries', journalRoutes);
app.use('/api/crisis-data', crisisDataRoutes);
app.use('/api/letters', letterRoutes);
app.use('/api/auth', user);


app.get('/api/health', (req, res) => {
  res.status(200).json({
    success: true,
    message: 'Server is running',
    timestamp: new Date().toISOString()
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
