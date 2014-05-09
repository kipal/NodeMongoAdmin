require('contour-fw')();

global.Service = {
    basePath : __dirname + "/frontend-service"
};

global.Service.deepExtend(require("./frontend-service/"));

var serverConfig = require(__dirname + '/config/NodeMongoAdmin-CONFIG/server-config.js');

new Service.Core.Bootstrap(serverConfig).run();