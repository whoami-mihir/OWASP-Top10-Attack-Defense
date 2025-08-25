# Lab Environment Setup

This section details the setup for the lab environment.

## Requirements
- **Docker**: Used to run the OWASP Juice Shop container.
- **Burp Suite Community Edition**: Acts as a proxy/intercept tool for capturing and modifying HTTP requests.
- **Web Browser**: Such as Google Chrome, configured to use Burp Suite as a proxy.

## Step-by-Step Setup
1. **Install Docker**:
   - On Ubuntu: ```sudo apt update && sudo apt install docker.io```
   - On macOS: Use Homebrew - ```brew install docker```
   - Verify: ```docker --version```

2. **Run OWASP Juice Shop**:
   - Pull the image: ```docker pull owasp/juiceshop```
   - Start the container: ```docker run -d -p 3000:3000 owasp/juiceshop```
   - Access the app: Open your browser and go to http://localhost:3000.

3. **Install and Configure Burp Suite**:
   - Download and install Burp Suite Community Edition from the official website.
   - In Burp, go to Proxy > Options and ensure the proxy listener is running on 127.0.0.1:8080.
   - In your browser, set up a proxy to 127.0.0.1:8080 (e.g., in Chrome, use a proxy extension or system settings).

4. **Browser Configuration**:
   - Ensure the browser is set to use the Burp proxy.
   - Install the Burp CA certificate in your browser for HTTPS interception (Burp > Proxy > Options > Import/Export CA Cert).

