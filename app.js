const http = require('http');
const route = require('./router');
const router = new route();
const snap = require('./snapshot');

// We need a server which relies on our router
const server = http.createServer((req, res) => {
    handler = router.route(req);
    handler.process(req, res);
});

// Start it up
server.listen(8000);

console.log("app is listening on port 8000")