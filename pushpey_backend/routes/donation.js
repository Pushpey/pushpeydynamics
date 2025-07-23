// routes/donation.js
import express from 'express';
import Donation from '../models/Donation.js';

const router = express.Router();

router.post('/', async (req, res) => {
  try {
    const { project, message } = req.body;
    const donation = new Donation({ project, message });
    await donation.save();
    res.status(200).json({ message: 'Donation message received' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to send message' });
  }
});

export default router;
