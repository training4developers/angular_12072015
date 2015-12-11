module.exports = function(grunt) {

	"use strict";

	grunt.initConfig({
		webServer: {
			port: 8080,
			rootFolder: "./app/www"
		}
	});

	grunt.registerTask("default", function() {

		const // var - .12 only
			http = require("http"),
			express = require("express");

		let // var - .12 only
			app = express(),
			httpServer = http.createServer(app),
			config = grunt.config();

		app.use(express.static(config.webServer.rootFolder));

		httpServer.listen(config.webServer.port, function() {
			console.log("web server listening on port " + config.webServer.port);
		});

		this.async();



	});



};
