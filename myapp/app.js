const express = require('express')
const app = express()

app.set('view engine', 'pug')

app.get('/flo', function (req, res) {
  res.send('Hello Flo')
})

app.get('/', function (req, res) {
  res.render('index', { title: 'Hey', message: 'Hello there!', paragraphe:'Florian tu es gentil' })
})

app.listen(8123, function () {
  console.log('Example app listening on port 8123!')
})