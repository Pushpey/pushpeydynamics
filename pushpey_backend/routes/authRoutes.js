import express from 'express';
import { loginUser } from '../controllers/authController.js';
import authMiddleware from '../middleware/authMiddleware.js';


const router = express.Router();

router.post('/login', loginUser);

router.get('/userdata', authMiddleware, (req, res) => {
  res.status(200).json({ message: 'Protected user data accessed!', user: req.user });
});



export default router;
