import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import contactRoutes from './routes/contactRoutes.js';
import donationRoutes from './routes/donation.js';
import authRoutes from './routes/authRoutes.js';
import authMiddleware from './middleware/authMiddleware.js'; // ✅ fixed here

dotenv.config();
connectDB();

const app = express();

// ✅ Proper CORS setup for localhost + deployed site
const allowedOrigins = [
  'http://localhost:5173',
  'https://pushpeydynamics.vercel.app',
];

app.use(cors({
  origin: function (origin, callback) {
    if (!origin || allowedOrigins.includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
}));

app.use(express.json());

// ✅ public routes
app.use('/api', authRoutes);

// ✅ protected routes
app.use('/api/contact', contactRoutes);     // 🔓 public
app.use('/api/donation', donationRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${ PORT }`);
});
