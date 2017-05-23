// Web Framework
var express = require('express');

// Parse Server
var ParseServer = require('parse-server').ParseServer;

// Initial express
var app = express();

// Config
var config = require("./config.js")

// Initialize Parse
var api = new ParseServer({
  	databaseURI: config.Parse.databaseURI,
  	cloud: config.Parse.cloud,
  	appId: config.Parse.appId,
  	masterKey: config.Parse.masterKey,
  	fileKey: config.Parse.fileKey,
  	serverURL: config.Parse.serverURL,
	push: {
		ios: [
			{
				pfx: __dirname + '/certificates/Development.p12', // Dev PFX or P12
				bundleId: 'com.kontrast.leaflets',
				production: false // Dev
			},
			{
				pfx: './certificates/Production.p12', // Prod PFX or P12
				bundleId: 'com.kontrast.leaflets',  
				production: true // Prod
			}
		]
	}
});

// Serve the Parse API on the /parse URL prefix
app.use('/parse', api);


// Start server
app.listen(1337, function()  {
  	console.log('Leaflets running on port 1337.');
});