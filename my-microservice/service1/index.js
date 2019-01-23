//Set up a general purpose Node Server
//Lets require/import the HTTP module
var http = require('http');
//Require the dispatcher module
var HttpDispatcher = require('httpdispatcher');
var dispatcher = new HttpDispatcher();

//Lets define a port we want to listen to
const PORT=3010; 

//Lets use our dispatcher
function handleRequest(request, response){
    try {
        //log the request on console
        console.log(request.url);
        //Disptach
        dispatcher.dispatch(request, response);
    } catch(err) {
        console.log(err);
    }
}


//For all your static (js/css/images/etc.) set the directory name (relative path).
dispatcher.setStaticDirname(__dirname);
dispatcher.setStatic('resources');

//A sample GET request    
dispatcher.onGet("/get1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Page One Get');
});

//A sample GET request    
dispatcher.onGet("/", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('You have successful GET to service1');
});
    

//A sample POST request
dispatcher.onPost("/post1", function(req, res) {
    res.writeHead(200, {'Content-Type': 'text/plain'});
    res.end('Got Post Data');
});

//Create a server
var server = http.createServer(handleRequest);

//Lets start our server
server.listen(PORT, function(){
    console.log("Server listening on: http://localhost:%s", PORT);
});
