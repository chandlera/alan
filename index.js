var express = require('express');
var http = require('http');
var expressHbs = require('express3-handlebars');
var errorhandler = require('errorhandler');
var throng = require('throng');
var helmet = require('helmet');
var browserSync = require('browser-sync');

var routes = require('./routes');
var app = express();

var WORKERS = process.env.WEB_CONCURRENCY || 1;

throng(start, {
  workers: WORKERS,
  lifetime: Infinity
});

function start() {
	app.engine('hbs', expressHbs({extname:'hbs', defaultLayout:'main.hbs'}));
	app.set('view engine', 'hbs');
        app.use(helmet());
	app.set('port', process.env.PORT || 7001);
	app.use(express.static(__dirname + '/public'));

	if (process.env.NODE_ENV === 'development') {
	  // only use in development
	  app.use(errorhandler());
	}

	app.get('/', routes.index);

  // if(process.env.NODE_ENV === 'development') {
  //   http.createServer(app).listen(app.get('port'), function() {
  // 		console.log('Express server listening on port ' + app.get('port'));
  // 		browserSync({
  // 			proxy: 'localhost:' + app.get('port'),
  // 			files: ['public/**/*.{js,css}']
  // 		});
  // 	});
  // }
  // else {
    http.createServer(app).listen(app.get('port'), function() {
  		console.log('Express server listening on port ' + app.get('port'));
  	});
  // }
}
