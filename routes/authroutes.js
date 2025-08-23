// routes/authRoutes.js
import express from 'express';
import { generateOTP, verifyOTP } from '../utils/otpStore.js';
import { createUserByPhone, isPhoneRegistered } from '../models/userModel.js';

const router = express.Router();

// Step 1: Request OTP
router.post('/register/request-otp', async (req, res) => {
  const { phonenumber } = req.body;
  if (!phonenumber) return res.status(400).json({ error: 'Phone number required' });

  const alreadyRegistered = await isPhoneRegistered(phonenumber);
  if (alreadyRegistered) return res.status(409).json({ error: 'Phone already registered' });

  const otp = generateOTP(phonenumber);
  console.log(`📲 OTP for ${phonenumber}: ${otp}`); // Simulate SMS
  res.json({ message: 'OTP sent successfully' });
});

// Step 2: Verify OTP and Register
router.post('/register/verify-otp', async (req, res) => {
  const { phonenumber, otp } = req.body;
  if (!phonenumber || !otp) return res.status(400).json({ error: 'Phone and OTP required' });

  const isValid = verifyOTP(phonenumber, otp);
  if (!isValid) return res.status(401).json({ error: 'Invalid OTP' });

  try {
    const user = await createUserByPhone(phonenumber);
    res.status(201).json({ message: 'User registered successfully', user });
  } catch (err) {
    res.status(500).json({ error: 'Registration failed' });
  }
});

export default router;
