const express = require('express');

const app = express();
// const hostname = '127.0.0.1'
const port = 1245;

app.get('/', (req, res) => {
  res.send('Hello Holberton School!');
});

app.listen(port, () => {
  console.log(`Example app listening on http://localhost:${port}`);
});

module.exports = app;
