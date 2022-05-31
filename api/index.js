const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World on slash!')
})

app.get('/hello', (req, res) => {
    res.send('Hello World! on hello')
})

app.get('/login', (req, res) => {
  res.send('Hello World! on login')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})