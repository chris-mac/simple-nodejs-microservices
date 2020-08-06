// Use express to set up simple API
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3010

app.use(bodyParser.json())
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
)

app.get('/', (request, response) => {
  response.json({ info: 'Hello World. Simple API service' })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
