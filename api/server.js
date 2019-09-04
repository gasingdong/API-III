const express = require('express');
const suppliersRouter = require('./suppliers/suppliersRouter');

const server = express();

server.use('/suppliers', suppliersRouter);

server.get('/', (req, res) => {
  res.status(200).json({ api: 'up' });
});

module.exports = server;
