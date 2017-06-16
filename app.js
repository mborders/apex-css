const express      = require('express');
const path         = require('path');
const app          = express();

const config = {
  port: 3000
};

/* Server static files */
app.use('/static', express.static(__dirname + '/public/static'));

/* Serve index.html on all other routes */
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '/public/index.html'));
});

/* Start listening */
app.listen(config.port, () => {
  console.log(`Server listening on ${config.port}`);
});
