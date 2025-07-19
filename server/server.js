import express from 'express';
import dotenv from 'dotenv';
import connectDB from './utils/db.js';
import userRoute from './routes/user.route.js';
import cookieParser from 'cookie-parser';
import cors from 'cors';

dotenv.config();
connectDB(); // ✅ Call it directly (not inside listen)

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: 'http://localhost:5173', // or your frontend URL
    credentials: true,
  })
);

// API routes
app.use('/api/v1/user', userRoute);

// Test route
app.get('/', (req, res) => {
  res.send({
    activeStatus: true,
    error: false,
  });
});

export default app; // ✅ This is what Vercel uses
