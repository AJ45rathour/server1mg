import express from 'express';
import dbConn from './config/dbConn.js';
import authRoutes from './routes/authroutes.js';


const app = express();
const PORT = process.env.PORT || 3000;



app.use(express.json());
// app.use('/api', authRoutes);
app.get('/',(req,res) => {
  res.send('API is running....');
});


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
