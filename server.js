const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;

// Serve static files from the root (for index.html + assets)
app.use(express.static(path.join(__dirname)));

// Serve the appyclan folder as-is
app.use("/appyclan", express.static(path.join(__dirname, "appyclan")));

// Fallback: serve index.html for all other routes
app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
