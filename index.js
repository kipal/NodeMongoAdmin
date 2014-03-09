Contour = require('contour-fw');
var serverConfig = require(__dirname + '/config/server-config.js');

Contour.Core.Bootstrap.setConfig({
    basicPath : __dirname,
    servers   : serverConfig
});