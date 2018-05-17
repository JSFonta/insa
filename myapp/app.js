const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/flo', function (req, res) {
  res.send('Hello Flo')
})

app.listen(8123, function () {
  console.log('Example app listening on port 8123!')
})