const express = require('express');
const app = express();

app.get('/', (req, res) => {
  res.send(`Hello from feed services!`);
});

app.listen(3000, () => {
  console.log('Feed service listening on port 3000');
});
