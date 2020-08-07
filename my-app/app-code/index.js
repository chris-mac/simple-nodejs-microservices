// Use express to set up simple API
const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

// Use axios module for our API requests
const axios = require('axios');

app.get('/', (request, response) => {
  console.log('index');
  response.send('Hello World. Simple front end service');
})

//A sample GET request
//dispatcher.onGet("/api-call", function(req, res) {
//    axios.get('http://localhost:3010/')
//     .then(response => {
//        res.end(response.data.info);
//    })
//    .catch(error => {
//      console.log(error);
//      res.end('Sorry there was an issue, please check logs for more details.');
//    });
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//});

//A sample POST request
//dispatcher.onPost("/post1", function(req, res) {
//    res.writeHead(200, {'Content-Type': 'text/plain'});
//    res.end('Got Post Data');
//});

app.get('/healthCheck', (request, response) => {
  response.send(process.env.INFRA_ENV + 'VERSION:' + process.env.VERSION)
})

app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})

