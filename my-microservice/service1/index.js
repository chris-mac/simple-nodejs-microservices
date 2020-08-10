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

app.get('/healthCheck', (request, response) => {
  response.json({ ENV: process.env.INFRA_ENV, VERSION: process.env.VERSION })
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
