// models/userModel.js
import dbConn from '../config/dbConn.js';

export const createUserByPhone = (phonenumber) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      'INSERT INTO login (phonenumber) VALUES (?)',
      [phonenumber],
      (err, result) => {
        if (err) reject(err);
        else resolve({ id: result.insertId, phonenumber });
      }
    );
  });
};

export const isPhoneRegistered = (phonenumber) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      'SELECT * FROM login WHERE phonenumber = ?',
      [phonenumber],
      (err, results) => {
        if (err) reject(err);
        else resolve(results.length > 0);
      }
    );
  });
};


export const findUserByPhone = (phonenumber) => {
  return new Promise((resolve, reject) => {
    dbConn.query(
      'SELECT * FROM login WHERE phonenumber = ?',
      [phonenumber],
      (err, results) => {
        if (err) reject(err);
        else resolve(results[0]); // return first match
      }
    );
  });
};

