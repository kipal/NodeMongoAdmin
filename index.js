Service = {
        ClientScript : {
            Register : require(__dirname + "/service/ClientScript/Register.js"),
            Module   : require(__dirname + "/service/ClientScript/Module.js")
        }
};

require('contour-fw')({
    basicPath   : __dirname,
    serviceRoot : {
        reference       : Service,
        moduleReference : module,
        path            : __dirname + "/service"
    }
});

var serverConfig = require(__dirname + '/config/server-config.js');

serverConfig.frontend.web.setIsCurrent(true);

Contour.Core.Bootstrap.setConfig({
    servers : serverConfig
});

Contour.Core.Bootstrap.run();