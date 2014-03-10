Contour = require('contour-fw');
var serverConfig = require(__dirname + '/config/server-config.js');

serverConfig.frontends.web.setIsCurrent(true);

Contour.Core.Bootstrap.setConfig({
    basicPath : __dirname,
    servers   : serverConfig
});

Contour.Core.Bootstrap.run();