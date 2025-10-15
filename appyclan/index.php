<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <title>Chatlog</title>
  <style>
    body {
      background: #000;
      color: #eee;
      font-family: consolas;
      padding: 40px;
    }
    pre {
      white-space: pre-wrap;
      background: #111;
      padding: 20px;
      border-radius: 8px;
      box-shadow: 0 0 8px #000;
    }
  </style>
</head>
<body>
  <h1>Chatlog [APPYCLAN]</h1>
  <pre>
<?php
$path = __DIR__ . '/appylogs.txt';
if (file_exists($path)) {
    echo htmlspecialchars(file_get_contents($path));
} else {
    echo "[ERRROR]: Infinite yield possible on [OBJECT].";
}
?>
  </pre>
</body>
</html>
