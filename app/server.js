module.exports = function(config) {

	"use strict";

	global.logger = require("./logger")(config.logger);

	const
		path = require("path"),
		mongoose = require("mongoose"),
		http = require("http"),
		express = require("express"),
		bodyParser = require("body-parser"),
		cors = require("cors");

	let
		widgetAPIRouter = express.Router(),
		webApp = express(),
		restApp = express(),
		WidgetModel = require("./models/widget");

	mongoose.connect("mongodb://" +
		config.mongoServer.host + ":" +
		config.mongoServer.port + "/" +
		config.mongoServer.dbName);

	//this.async();

	// replaced with static folders
	// webApp.use("/css", express.static(cssFolder, {
	// 	setHeaders: function(res, filePath) {
	// 		res.setHeader("Content-Type", "text/css");
	// 		if (/.gz.css$/.test(filePath)) {
	// 			res.setHeader("Content-Encoding", "gzip");
	// 		}
	// 	}
	// }));
	//
	// webApp.use("/js", express.static(jsFolder, {
	// 	setHeaders: function(res, filePath) {
	// 		res.setHeader("Content-Type", "text/javascript");
	// 		if (/.gz.js$/.test(filePath)) {
	// 			res.setHeader("Content-Encoding", "gzip");
	// 		}
	// 	}
	// }));

	config.webServer.staticFolders.forEach(function(staticFolder) {
		webApp.use(staticFolder.url, express.static(
			path.join(config.webServer.wwwFolder, staticFolder.folder), {
				setHeaders: function(res, filePath) {
					if (/.gz./.test(filePath)) {
						res.setHeader("Content-Encoding", "gzip");
					}
				}
			}));
	});

	webApp.use("/", function(req, res) {

		res.sendFile(config.webServer.defaultFile, function(err) {
			if (err) res.status(err.status).end();
		});

	});

	http.createServer(webApp).listen(config.webServer.port, function() {
		logger.info("web server started on port " + config.webServer.port);
	});

	restApp.use(bodyParser.json());
	restApp.use(cors());

	widgetAPIRouter.route("/widgets")
		.get(function(req, res) {

			WidgetModel.find({}, function(err, results) {
				if (err) {
					console.log(err);
					res.status(500).json(err);
					return;
				}
				res.jsonp(results);
			});

		})
		.post(function(req, res) {

			var t = new WidgetModel(req.body);
			t.save(function(err, result) {
				if (err) {
					res.status(500).json(err);
					return;
				}
				res.json(result);
			});

		});

	widgetAPIRouter.route("/widgets/:widgetId")
		.get(function(req, res) {

			WidgetModel.findById(req.params.widgetId,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.jsonp(result);
				});

		})
		.put(function(req, res) {

			WidgetModel.findByIdAndUpdate(req.params.widgetId,
				req.body,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(req.body);
				});

		})
		.delete(function(req, res) {

			WidgetModel.findByIdAndRemove(req.params.widgetId,
				function(err, result) {
					if (err) {
						res.status(500).json(err);
						return;
					}
					res.json(result);
				});

		});

	restApp.use("/", widgetAPIRouter);


	http.createServer(restApp).listen(config.restServer.port, function() {
		logger.info("rest server started on port " + config.restServer.port);
	});

}
