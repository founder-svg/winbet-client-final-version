# 🏏 WinBet IPL 2026 — HTTPS Server

## ▶️ Quick Start

### Step 1 — Install Node.js
https://nodejs.org (v14 or higher)

### Step 2 — Generate SSL Certificate (one time)
```bash
node generate-ssl.js
```

### Step 3 — Start Server
```bash
node server.js
```

### Step 4 — Open in Browser
```
https://localhost
```
> ⚠️ Browser shows "Not Secure" warning for self-signed certs.
> Click **Advanced → Proceed to localhost** — this is normal for local dev.

---

## ⚙️ Custom Port (if 443/80 are blocked)
```bash
HTTPS_PORT=8443 HTTP_PORT=8080 node server.js
# Then open: https://localhost:8443
```

---

## 🌍 Real Domain (Free SSL via Let's Encrypt)
```bash
sudo apt install certbot
sudo certbot certonly --standalone -d yourdomain.com

# Then update server.js:
# SSL_KEY  = '/etc/letsencrypt/live/yourdomain.com/privkey.pem'
# SSL_CERT = '/etc/letsencrypt/live/yourdomain.com/fullchain.pem'
```

---

## 📁 Folder Structure
```
winbet-https/
├── server.js          ← HTTPS server
├── generate-ssl.js    ← SSL cert generator
├── package.json
├── ssl/               ← Auto-created by generate-ssl.js
│   ├── key.pem
│   └── cert.pem
└── public/            ← Your website
    ├── index.html     ✅ WinBet homepage
    ├── style.css
    └── main.js
```
