// Use express to set up simple API
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000
const api_endpoint = process.env.API_ENDPOINT

// Use axios module for our API requests
const axios = require('axios');

app.get('/', (request, response) => {
  console.log('index');
  response.send('Hello World. Simple front end service');
})

app.get('/api-call', (req, res) => {
  axios.get(api_endpoint)
  .then(response => {
    res.send('Successful call to API. Response: ' + response.data.info);
  })
  .catch(error => {
    console.log(error);
    res.send('Sorry there was an issue, please check logs for more details.');
  });
})

app.get('/healthCheck', (request, response) => {
  response.send(process.env.INFRA_ENV + 'VERSION:' + process.env.VERSION)
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

