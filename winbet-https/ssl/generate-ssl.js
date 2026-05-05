'use strict';

const { execSync } = require('child_process');
const fs   = require('fs');
const path = require('path');

const SSL_DIR  = path.join(__dirname, 'ssl');
const KEY_FILE = path.join(SSL_DIR, 'key.pem');
const CRT_FILE = path.join(SSL_DIR, 'cert.pem');

if (!fs.existsSync(SSL_DIR)) fs.mkdirSync(SSL_DIR, { recursive: true });

if (fs.existsSync(KEY_FILE) && fs.existsSync(CRT_FILE)) {
  console.log('\n  ✅  SSL certificates already exist. Run: node server.js\n');
  process.exit(0);
}

console.log('\n  🔐  Generating SSL certificate...\n');

try {
  execSync(
    `openssl req -x509 -newkey rsa:2048 -keyout "${KEY_FILE}" -out "${CRT_FILE}" ` +
    `-days 825 -nodes -subj "/C=IN/ST=Gujarat/L=Ahmedabad/O=WinBet/CN=localhost" ` +
    `-addext "subjectAltName=DNS:localhost,IP:127.0.0.1"`,
    { stdio: 'pipe' }
  );
  console.log('  ✅  Done! ssl/key.pem and ssl/cert.pem created.');
  console.log('  🚀  Now run: node server.js');
  console.log('  🌐  Open:    https://localhost\n');
  console.log('  ⚠️   Browser will show a warning — click Advanced → Proceed. Normal for localhost.\n');
} catch (e) {
  console.error('  ❌  OpenSSL not found.');
  console.error('      Install: https://slproweb.com/products/Win32OpenSSL.html (Windows)');
  console.error('      Linux/Mac: sudo apt install openssl  OR  brew install openssl\n');
  process.exit(1);
}
