
// Used to generate non-colliding hashes
var hat = require("hat");

// Config Object
var Config = {};

// Parse Configuration 
Config.Parse = {};
Config.Parse.databaseURI = "mongodb://leaflets:leaflets@api.getleaflets.co:37018/leaflets"
Config.Parse.cloud =  __dirname + "/cloud/main.js"
Config.Parse.appId = "leaflets"
Config.Parse.masterKey = "a74bc3b9ca53d143da3617f138ec8158"
Config.Parse.fileKey = " 373cf93a92da1f95115a5093468279c9"
Config.Parse.serverURL = "http://api.getleaflets.co:1337/parse"

// Mailgun
Config.Mailgun = {}
Config.Mailgun.domain = "leafletsapp.co"
Config.Mailgun.key = "key-4b6cfdf2afe77b768fcb261a8a7d62f2"

// Twilio
Config.Twilio = {}
Config.Twilio.phone = "+15012155769"
Config.Twilio.sid = "AC9e9380a914802e6c64d045dd75320432"
Config.Twilio.token = "f4d755f7a4efd4ee7125c2b8ed362b58"

module.exports = Config