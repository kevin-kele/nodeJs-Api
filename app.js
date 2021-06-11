require("babel-register");

const express = require('express');
const morgan = require('morgan')
const app = express();
const port = 3000

app.use(morgan('dev'))

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/books/:id', (req, res) => {
  res.send(req.params)
})



app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})