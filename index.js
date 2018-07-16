/* eslint-env node */

const express = require('express');
const http = require('http');
const errorhandler = require('errorhandler');
const helmet = require('helmet');
const throng = require('throng');
const compress = require('compression');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');

const routes = require('./routes');
const app = express();

const config = require('./webpack.config.js');
const compiler = webpack(config);

const WORKERS = process.env.WEB_CONCURRENCY || 1;

throng({
    workers: WORKERS,
    lifetime: Infinity,
    start: start
});

function start() {
    app.use(helmet());
    app.set('port', process.env.PORT || 7001);

    app.use(webpackDevMiddleware(compiler, {
        publicPath: config.output.publicPath,
        mode: process.env.NODE_ENV
    }));
    app.use(compress());

    if (process.env.NODE_ENV === 'development') {
        app.use(errorhandler());
    }

    app.get('/', routes.index);
    app.get('/projects', routes.projects);
    app.get('/contact', routes.contact);
    app.get('/.well-known/acme-challenge/2cR2xlfGjq7HPOeqjRiWmekD49JKYazWDX-tzCp-NvU', function (req, res) {
        res.send('2cR2xlfGjq7HPOeqjRiWmekD49JKYazWDX-tzCp-NvU.cowSSx6eB5gl2OcF18rP9k_bx0-NdNcRZNnxkIrSZb4');
    });

    http.createServer(app).listen(app.get('port'), function () { });
}
