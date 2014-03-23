App = {};
require('contour-fw')({
    basicPath : __dirname
});

var serverConfig = require(__dirname + '/config/server-config.js');

serverConfig.frontend.web.setIsCurrent(true);

Contour.Core.Bootstrap.setConfig({
    servers : serverConfig
});

Contour.Core.Bootstrap.run();