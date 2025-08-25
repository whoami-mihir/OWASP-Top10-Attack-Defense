# Attack Steps: Finding a Plaintext Password

## Steps to Perform the Attack
1. In OWASP Juice Shop, use Burp Suite to intercept and analyze requests/responses.
2. Look for endpoints that return user data, such as profile pages.
3. Identify a response that includes a password in plaintext (e.g., in a JSON response).
4. Extract the password for unauthorized access.

For example, intercept a request to /api/Users and find a response with: {"username": "admin", "password": "admin123"}

