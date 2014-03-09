module.exports = (function (responseHandler) {
    'use strict';

    function Bootstrap() {
        var requestTable = {
            module : function (value) {
                return { mi : value + 10};
            }
        };

        this.run = function (request) {
            try {
                return requestTable[request.key](request.value);
            }
            catch (err) {
                // new Response
                return {error : 'semmi'};
            }
        };
    }

    return Bootstrap;
}(Application.ResponseHandler));