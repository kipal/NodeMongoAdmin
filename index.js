App     = {};
require('contour-fw')({
    basicPath : __dirname
});

var serverConfig = require(__dirname + '/config/server-config.js');

serverConfig.frontends.web.setIsCurrent(true);

Contour.Core.Bootstrap.setConfig({
    servers   : serverConfig
});

Contour.Core.Bootstrap.run();