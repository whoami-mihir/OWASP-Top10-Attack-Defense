# OWASP Top 10 2021: Hands-On Attack and Defense Lab

## Objective
This repository demonstrates the practical exploitation and mitigation of the top 3 vulnerabilities from the OWASP Top 10 2021 list using the OWASP Juice Shop vulnerable application. The vulnerabilities covered are:
- A01:2021 - Broken Access Control
- A03:2021 - Injection
- A02:2021 - Cryptographic Failures

## Lab Environment
To set up the lab:
1. Install Docker: Follow instructions at https://docs.docker.com/get-docker/.
2. Pull and run OWASP Juice Shop:  
   ```bash
   docker pull owasp/juiceshop
   docker run -p 3000:3000 owasp/juiceshop
   ```
   Access the application at http://localhost:3000.
3. Install Burp Suite Community Edition: Download from https://portswigger.net/burp/community-download and configure it as a proxy.
4. Use a web browser (e.g., Chrome) and set up the proxy to route traffic through Burp Suite.

Follow the vulnerability-specific guides in the subdirectories for attacks and mitigations.

