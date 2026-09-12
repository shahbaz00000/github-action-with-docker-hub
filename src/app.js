const express = require('express');

const app = express();

app.use(express.json());

app.get('/api/test', (_request, response) => {
  response.json({
    success: true,
    message: 'Backend is working yes it isworking '
  });
});

module.exports = app;
