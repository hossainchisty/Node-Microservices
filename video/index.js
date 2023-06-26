const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from video service`);
});

app.listen(3000, () => {
  console.log('Video service listening on port 3000');
});
