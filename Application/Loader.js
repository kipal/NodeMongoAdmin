include('Application.App');
include('Application.ResponseHandler');

(function (ResponseHandler, App) {
    'use strict';

    var responseHandler = new ResponseHandler();
    var bootStrap       = new App();

    var server = new Contour.Core.Server(3000, responseHandler);

    server.start();

}(Application.ResponseHandler, Application.App));