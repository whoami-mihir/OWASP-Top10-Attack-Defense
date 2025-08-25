# Mitigation Strategy for A03: Injection

To mitigate Injection vulnerabilities:
- Use parameterized queries or prepared statements to separate code from data.
- Sanitize and validate all user inputs.
- Implement input validation frameworks.

## Corrected Code Snippet (Node.js/JavaScript)
Original vulnerable code (using string concatenation, which is bad):
```javascript
const query = "SELECT * FROM users WHERE username = '" + username + "' AND password = '" + password + "'";
db.query(query, (err, results) => { ... });
```

Corrected version using parameterized queries:
```javascript
const mysql = require('mysql2/promise');  // Using mysql2 for promises

async function login(username, password) {
  const connection = await mysql.createConnection({ host: 'localhost', user: 'user', password: 'pass', database: 'juiceshop' });
  const sql = 'SELECT * FROM users WHERE username = ? AND password = ?';
  const [rows] = await connection.execute(sql, [username, password]);
  console.log(rows);  // Process results
  await connection.end();
}

login('user', 'password').catch(console.error);
```

