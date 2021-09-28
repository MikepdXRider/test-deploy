const express = require('express')
const app = express()
const port = process.env.PORT || 3000

require('dotenv').config()

app.get('/', (req, res) => {
  res.send('Smello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})