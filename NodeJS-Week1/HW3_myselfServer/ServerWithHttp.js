//Import Http module
const http = require('http');

//Create web server with Http
const server = http.createServer(function(req, res){
    
    //Check the current url
    if (req.url == '/') {
        // set response header
        res.writeHead(200, {'Content-Type': 'text/html'})
        
        // set response content
        res.write('<html><body><p>This is home Page.</p></body></html>')
        res.end()
    } else if(req.url == '/node'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is Node.js Page.</p></body></html>');
        res.end();
    }else if(req.url == '/react'){
        res.writeHead(200, { 'Content-Type': 'text/html' });
        res.write('<html><body><p>This is React Page.</p></body></html>');
        res.end();
    }else{
        res.end('Invalid Request!');
    }
})

//listen for any incoming requests
server.listen(5000); 

console.log('Node.js web server at port 5000 is running..')