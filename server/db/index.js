const mysql = require('mysql');

const pool = mysql.createPool({
  connectionLimit: 10,
  password: 'password',
  user: 'root',
  database: 'chirpr',
  host: 'localhost',
  port: '3306',
});

let chirprdb = {};

chirprdb.all = () => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM chirps`, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows);
      }
    });
  });
};

chirprdb.one = (id) => {
  return new Promise((resolve, reject) => {
    pool.query(`SELECT * FROM chirps WHERE id = ?`, id, (err, rows) => {
      if (err) {
        reject(err);
      } else {
        resolve(rows[0]);
      }
    });
  });
};

module.exports = chirprdb;
