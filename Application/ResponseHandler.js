include('Contour.Core.FrontendRequestHandler');

module.exports = (function (AbstractResponseHandler) {
    'use strict';

    function ResponseHandler() {
        AbstractResponseHandler.call(this);

        this.responseContent = function (request) {
            return { v : 'semmike'};
        };
    }

    ResponseHandler.prototype = AbstractResponseHandler.prototype;

    return ResponseHandler;
}(Contour.Core.FrontendRequestHandler));