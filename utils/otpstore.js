// utils/otpStore.js
const otpMap = new Map();

export const generateOTP = (phone) => {
  const otp = Math.floor(100000 + Math.random() * 900000).toString();
  otpMap.set(phone, otp);
  setTimeout(() => otpMap.delete(phone), 5 * 60 * 1000); // expires in 5 mins
  return otp;
};

export const verifyOTP = (phone, otp) => {
  return otpMap.get(phone) === otp;
};
