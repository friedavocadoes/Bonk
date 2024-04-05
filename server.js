const express = require('express');
const app = express();
const path = require('path');
const port = 3000;

// Serve static files from the current directory
app.use(express.static(__dirname));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'index.html'));
});

app.listen(port, () => {
  console.log(`Up and running on port ${port}. \nCTRL + click to open --> http://localhost:${port}`);
});
