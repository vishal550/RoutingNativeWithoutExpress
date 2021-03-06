const route = require('./router');
const url = require('url');
class Snapshot extends route {
    constructor() {
        super();
        this.registerGet('/createSnapshot',  (req, res) => {
            const queryObj = url.parse(req.url, true).query;
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello createSnapshot!');
            res.end();
        })

        this.registerPost('/compareSnapshot',  (req, res) => {
            res.writeHead(200, { 'Content-Type': 'text/plain' });
            res.write('Hello compareSnapshot!');
            res.end();
        })
    }
}

module.exports = new Snapshot();