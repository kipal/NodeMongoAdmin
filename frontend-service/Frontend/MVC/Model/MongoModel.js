module.exports = new Service.ClientScript(
    function (Request, RequestHandler) {

        var instance = null;

        function MongoModel() {
            if (null !== instance) {

                return instance;
            }

            var sendRequest = function (methodName, callback, params, errorCallback) {
                RequestHandler.getInstance().sendRequest(
                    new Request("db", methodName, params),
                    function (responseObj) {
                        callback(responseObj.data);
                    },
                    function (responseObj) {
                        if (!errorCallback) {
                            alert("[error] " + JSON.stringify(responseObj));
                            console.log("[error] " + JSON.stringify(responseObj));
                        } else {
                            errorCallback(responseObj);
                        }

                    }
                );
            };

            this.listDatabases = function (callback) {
                sendRequest("listDatabases", callback);
            };

            this.collections = function (dbName, callback) {
                sendRequest("collections", callback, {"dbName" : dbName});
            };

            this.status = function (callback, errorCallback) {
                sendRequest("serverStatus", callback, {}, errorCallback);
            };

            this.findAll = function (paramObject, callback) {
                sendRequest(
                    "findAll",
                    callback,
                    paramObject
                );
            };

            this.removeById = function (paramObject, callback) {
                sendRequest(
                    "removeById",
                    callback,
                    paramObject
                );
            };

            this.updateById = function (paramObject, callback) {
                sendRequest(
                    "updateById",
                    callback,
                    paramObject
                );
            };

            this.save = function (paramObject, callback) {
                sendRequest(
                    "save",
                    callback,
                    paramObject
                );
            };

            this.dropDB = function (paramObject, callback) {
                sendRequest(
                    "dropDB",
                    callback,
                    paramObject
                );
            };

            this.addDatabase = function (name, callback) {
                sendRequest(
                    "addDB",
                    callback,
                    name
                );
            };

            this.addCollection = function (param, callback) {
                sendRequest(
                    "addCollection",
                    callback,
                    param
                );
            };

            this.removeCollection = function (param, callback) {
                sendRequest(
                    "removeCollection",
                    callback,
                    param
                );
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
});