const mockMiddleware = require('./middleware');

const express = require('express');
const request = require('request');
const webpack = require('webpack');

const app = express();

app.get('/api/v1/test', mockMiddleware);
app.get('/', (req, res) => {
  res.sendFile(`${__dirname}/public/index.html`);
});


app.set('port', process.env.PORT || 5555);
app.listen(app.get('port'), () => {
  console.log('Serving client app on port 5555');
});
