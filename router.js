const handlerFactory = require('./handler');
const parser = require('url');
const handlers = {
    'GET': {

    },
    'POST': {

    }
};

class Router {
    registerPost(url, method) {
        handlers.POST[url] = handlerFactory.createHandler(method);
    }

    registerGet(url, method) {
        handlers.GET[url] = handlerFactory.createHandler(method);
    }

    route(req) {
        let url = parser.parse(req.url, true);
        let handler;
        console.log()
        if (req.method === 'GET') {
            handler = handlers.GET[url.pathname];
        } else if (req.method === 'POST') {
            handler = handlers.POST[url.pathname];
        } else {
            handler = this.missing(req);
        }
        handler = handler || this.missing(req);
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