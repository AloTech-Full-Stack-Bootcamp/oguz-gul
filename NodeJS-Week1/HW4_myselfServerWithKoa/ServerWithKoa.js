// Initialize Koa
const koa = require('koa')
const route = require('koa-route')

const app = koa()

// intialize root page with koa-route
app.use(route.get('/', index))

// initialize node page with koa-route
app.use(route.get('/node', node))

// initialize react page with koa-route
app.use(route.get('/react', react))

// request on the root page
function *index(){
    this.body = "<html><body><h1>This is home Page with Koa Module.</h1></body></html>"
}

// request on the node page
function *node(){
    this.body = "<html><body><h1>This is node Page with Koa Module.</h1></body></html>"
}

// request on the react page
function *react(){
    this.body = "<html><body><h1>This is react Page with Koa Module.</h1></body></html>"
}

app.listen(8000);
console.log('Koa listening on port 8000');

