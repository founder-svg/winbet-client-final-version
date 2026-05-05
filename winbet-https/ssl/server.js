'use strict';

const https = require('https');
const http  = require('http');
const fs    = require('fs');
const path  = require('path');

const HTTPS_PORT = process.env.HTTPS_PORT || 443;
const HTTP_PORT  = process.env.HTTP_PORT  || 80;
const PUBLIC_DIR = path.join(__dirname, 'public');
const SSL_KEY    = path.join(__dirname, 'ssl', 'key.pem');
const SSL_CERT   = path.join(__dirname, 'ssl', 'cert.pem');

const MIME = {
  '.html': 'text/html; charset=utf-8',
  '.css' : 'text/css; charset=utf-8',
  '.js'  : 'application/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png' : 'image/png',
  '.jpg' : 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.gif' : 'image/gif',
  '.svg' : 'image/svg+xml',
  '.ico' : 'image/x-icon',
  '.webp': 'image/webp',
  '.woff' : 'font/woff',
  '.woff2': 'font/woff2',
};

function handleRequest(req, res) {
  let urlPath = decodeURIComponent(req.url.split('?')[0]);
  if (urlPath === '/' || urlPath === '') urlPath = '/index.html';

  const filePath = path.join(PUBLIC_DIR, urlPath);

  // Block path traversal
  if (!filePath.startsWith(PUBLIC_DIR)) {
    res.writeHead(403); res.end('Forbidden'); return;
  }

  fs.stat(filePath, (err, stat) => {
    if (err || !stat.isFile()) {
      res.writeHead(404, { 'Content-Type': 'text/html; charset=utf-8' });
      res.end('<h1>404 Not Found</h1>');
      return;
    }
    const ext      = path.extname(filePath).toLowerCase();
    const mimeType = MIME[ext] || 'application/octet-stream';

    fs.readFile(filePath, (err2, data) => {
      if (err2) { res.writeHead(500); res.end('Error'); return; }

      res.setHeader('Strict-Transport-Security', 'max-age=31536000; includeSubDomains');
      res.setHeader('X-Frame-Options',           'SAMEORIGIN');
      res.setHeader('X-Content-Type-Options',    'nosniff');
      res.setHeader('Cache-Control', ext === '.html'
        ? 'no-cache, no-store, must-revalidate'
        : 'public, max-age=86400');
      res.writeHead(200, { 'Content-Type': mimeType });
      res.end(data);

      console.log(`  [${new Date().toLocaleTimeString()}] 200 ${req.url}`);
    });
  });
}

// Check SSL certs
if (!fs.existsSync(SSL_KEY) || !fs.existsSync(SSL_CERT)) {
  console.error('\n  ❌  SSL certificates not found!');
  console.error('  👉  Run this first:  node generate-ssl.js\n');
  process.exit(1);
}

// HTTPS server
const httpsServer = https.createServer(
  { key: fs.readFileSync(SSL_KEY), cert: fs.readFileSync(SSL_CERT) },
  handleRequest
);
httpsServer.listen(HTTPS_PORT, () => {
  console.log('\n  ╔════════════════════════════════════════╗');
  console.log('  ║   🔒  WinBet HTTPS Server Running      ║');
  console.log(`  ║   🌐  https://localhost:${HTTPS_PORT}           ║`);
  console.log('  ║   Press Ctrl+C to stop                 ║');
  console.log('  ╚════════════════════════════════════════╝\n');
});

// HTTP → HTTPS redirect
http.createServer((req, res) => {
  const host = (req.headers.host || 'localhost').split(':')[0];
  res.writeHead(301, { Location: `https://${host}:${HTTPS_PORT}${req.url}` });
  res.end();
  console.log(`  [redirect] http → https${req.url}`);
}).listen(HTTP_PORT, () => {
  console.log(`  🔄  HTTP redirect on port ${HTTP_PORT} → HTTPS\n`);
});

process.on('SIGINT', () => {
  console.log('\n  👋  Server stopped.\n');
  process.exit(0);
});
