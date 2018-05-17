const express = require('express')
const app = express()
let router = express.Router();

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

app.get('/', function (req, res) {
  res.send('Hello World!')
})

app.get('/flo', function (req, res) {
  res.send('Hello Flo')
})

app.listen(8123, function () {
  console.log('Example app listening on port 8123!')
})