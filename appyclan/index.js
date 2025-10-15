import express from 'express';
import fs from 'fs';
import path from 'path';

const app = express();
const LOG_FILE = path.join(process.cwd(), 'appylogs.txt');

app.get('/chatlog', (req, res) => {
  let data;
  if (fs.existsSync(LOG_FILE)) {
    data = fs.readFileSync(LOG_FILE, 'utf8');
  } else {
    data = "[ERROR]: Infinite yield possible on [OBJECT].";
  }

  res.send(`
  <!DOCTYPE html>
  <html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>Chatlog</title>
    <style>
      body { background:#000; color:#eee; font-family:consolas; padding:40px; }
      pre { white-space:pre-wrap; background:#111; padding:20px; border-radius:8px; box-shadow:0 0 8px #000; }
    </style>
  </head>
  <body>
    <h1>Chatlog [APPYCLAN]</h1>
    <pre>${data}</pre>
  </body>
  </html>
  `);
});

app.listen(3001, () => console.log("Chatlog viewer running on port 3001"));
