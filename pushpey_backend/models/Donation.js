// models/Donation.js
import mongoose from 'mongoose';

const donationSchema = new mongoose.Schema({
  project: String,
  message: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

export default mongoose.model('Donation', donationSchema);
