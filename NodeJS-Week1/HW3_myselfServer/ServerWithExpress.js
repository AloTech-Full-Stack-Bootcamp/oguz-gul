//Import Express module
const express = require('express')
const app = express()

// on the request to root page
app.get('/',function(req, res){
    res.send('<html><body><p>This is home Page with Express Module.</p></body></html>')
})

// on the request to node page
app.get('/node', function(req,res){
    res.send('<html><body><p>This is Node.js Page with Express Module.</p></body></html>')
})

// on the request to react page
app.get('/react', function(req,res){
    res.send('<html><body><p>This is React Page with Express Module.</p></body></html>')
})

app.use(function(req,res,next){
    res.status(404).send("Sorry, that route doesn't exist.")
})

app.listen(5000, function(){
    console.log('App listening on port 5000')
})