/* eslint-env node */

const finalhandler = require('finalhandler');
const http = require('http');
const serveStatic = require('serve-static');
const throng = require('throng');

const WORKERS = process.env.WEB_CONCURRENCY || 1;

throng({
  workers: WORKERS,
  lifetime: Infinity,
  start: start,
});

// Create server
function start() {
  const serve = serveStatic('dist', { index: ['index.html'] });

  const server = http.createServer(function onRequest(req, res) {
    serve(req, res, finalhandler(req, res));
  });

  server.listen(process.env.PORT || 7001);
}
