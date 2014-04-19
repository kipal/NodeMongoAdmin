require('contour-fw')({
    basePath   : __dirname
});

global.Service = {
    basePath : __dirname + "/frontend-service"
};

global.Service.deepExtend(require("./frontend-service/"));

var serverConfig = require(__dirname + '/config/server-config.js');

var bootStrap  = new Service.Core.Bootstrap();
var reqHandler = new Contour.Frontend.Http.RequestHandler();
reqHandler.setServerConfig(serverConfig);
var router     = new Contour.Frontend.Http.Router(reqHandler);

bootStrap.setCurrentServer(
    new Contour.Frontend.Http.Server(
        serverConfig.frontend.web.port,
        new Contour.Frontend.Http.ResponseHandler(Service.ClientScript.getRegister(), router)
    )
);

bootStrap.run();