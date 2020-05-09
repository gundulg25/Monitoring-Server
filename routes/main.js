const express = require('express');
const app = express.Router();
const http = require('request');
const cors = require('cors');

app.use(cors());
app.get('/', (req, res, next) => {
  let location = req.query.loc
  let requ = {
    host: 'api.pray.zone',
    port: 443,
    method: 'GET',
    url: `https://api.pray.zone/v2/times/today.json/?ip=${location}`,
    rejectUnauthorized: false,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  http(requ, (err, response, body) => {
    if(err) throw err;
    res.json({
      code: '200',
      data: JSON.parse(body)
    })
  })

})

module.exports = app;
