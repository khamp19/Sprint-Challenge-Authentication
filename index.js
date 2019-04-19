const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
require('dotenv').config(); // load .env variables

// const server = express();

// server.use(helmet());
// server.use(cors());
// server.use(express.json());

const server = require('./api/server.js');

const port = process.env.PORT || 8000;
server.listen(port, () => {
  console.log(`\n=== Server listening on port ${port}\n`);
});

server.get('/', (req, res) => {
  res.send('hello!');
});