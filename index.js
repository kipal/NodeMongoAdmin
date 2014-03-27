require('contour-fw')({
    basePath   : __dirname
});

console.log("Service module loading...");
    global.Service = require("./service/");
console.log("Service modules are loaded.");

var serverConfig = require(__dirname + '/config/server-config.js');

serverConfig.frontend.web.setIsCurrent(true);


var bootStrap = new Service.Core.Bootstrap;
bootStrap.setConfig({
    servers : serverConfig
});

bootStrap.run();