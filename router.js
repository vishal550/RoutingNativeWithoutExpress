const handlerFactory = require('./handler');
const parser = require('url');
const handlers = {};

class Router {
    register(url, method) {
        handlers[url] = handlerFactory.createHandler(method);
    }

    route(req) {
        let url = parser.parse(req.url, true);
        let handler = handlers[url.pathname];
        if (!handler) handler = this.missing(req)
        return handler;
    }

    missing(req) {
        return handlerFactory.createHandler((req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plaine' });
            res.write('unknown path');
            res.end();
        });
    }
}

module.exports = Router;