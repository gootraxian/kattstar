import express from 'express';
import fetch from 'node-fetch'; // npm i node-fetch@3
import fs from 'fs';
import path from 'path';

const app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const WEBHOOK_URL = "https://discord.com/api/webhooks/1427860935925698580/B2jzHDinyRTysWMDXJA6Uep7KzgktrCq2cwSFinnF2o0tFUvFDrIKg5vNXR_MQAAOIFk";
const LOG_FILE = path.join(process.cwd(), 'appylogs.txt');

app.post('/send', async (req, res) => {
  const content = req.body.content?.trim();
  if (!content) return res.status(400).send("Please enter a message.");

  try {
    // Send to Discord
    const response = await fetch(WEBHOOK_URL, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ content })
    });

    // Save to local log
    fs.appendFileSync(LOG_FILE, `[${new Date().toISOString()}] ${content}\n`);

    const text = await response.text();
    res.send(`Message sent! Discord response: ${text}`);
  } catch (err) {
    res.status(500).send(`Error sending message: ${err.message}`);
  }
});

app.listen(3000, () => console.log("Webhook sender running on port 3000"));

