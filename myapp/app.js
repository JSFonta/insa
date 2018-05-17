const express = require('express')
const app = express()

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.listen(8123, function () {
  console.log('Example app listening on port 8123!')
})