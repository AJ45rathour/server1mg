// db.js
import mysql from 'mysql';

const dbConn = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: '1mg'
});

dbConn.connect((err) => {
  if (err) {
    console.error('❌ Error connecting to MySQL:', err.message);
    return;
  }
  console.log('✅ Connected to MySQL database: 1mg');
});

export default dbConn;
