module.exports = new Service.ClientScript(
    function (Request, RequestHandler) {

        var instance = null;

        function MongoModel() {
            if (null !== instance) {

                return instance;
            }

            var sendRequest = function (methodName, callback, params) {
                RequestHandler.getInstance().sendRequest(
                    new Request("db", methodName, params),
                    callback
                );
            };

            this.listDatabases = function (callback) {
                sendRequest("listDatabases", callback);
            };

            this.collections = function (dbName, callback) {
                sendRequest("collections", callback, {"dbName" : dbName});
            };

            this.status = function (callback) {
                sendRequest("serverStatus", callback);
            };

            instance = this;
        }

        MongoModel.getInstance = function () {

            return new MongoModel();
        };

        return MongoModel;
    }
).signUp({
    name : "Frontend.MVC.Model.MongoModel",
    dep  : ["Contour.Core.Http.Request", "Contour.Frontend.Http.RequestHandler"]
}).dep("Contour.Core.Http.Request", "Contour.Frontend.Http.RequestHandler");