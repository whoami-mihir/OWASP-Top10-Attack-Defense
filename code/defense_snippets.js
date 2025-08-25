// Example: SQL Injection mitigation using Node.js
const mysql = require('mysql2');
const db = mysql.createConnection({ host: 'localhost', user: 'root', database: 'juiceshop' });

const login = (email, password) => {
  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.execute(query, [email, password], (err, results) => {
    if (err) throw err;
    console.log(results);
  });
};
