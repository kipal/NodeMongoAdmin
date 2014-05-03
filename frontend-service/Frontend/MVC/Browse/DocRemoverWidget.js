module.exports = new Service.ClientScript(
    function (CommonWidget, Mongo) {

        function DocRemoverWidget(parentDom, parentWidget) {

            CommonWidget.call(this, parentDom, parentWidget);

            this.run = function () {
                this.getView().innerHTML = "Remove";
                this.setEvent("onclick", this.removeDoc.bind(this));
            };

            this.removeDoc = function () {
                Mongo.getInstance().removeById(
                    {
                        dbName         : parentWidget.getDBName(),
                        collectionName : parentWidget.getCollectionName(),
                        id             : parentWidget.getOriginalData()._id
                    },
                    function (resp) {
                        if (1 == resp) {
                            this.removeFromList();
                        }
                    }.bind(this)
                );
            };

            this.removeFromList = function () {
                parentWidget.removeFromList();
            };
        }

        DocRemoverWidget.prototype             = CommonWidget.prototype;
        DocRemoverWidget.prototype.constructor = DocRemoverWidget;

        return DocRemoverWidget;
    }
).signUp({
    name : "Frontend.MVC.Browse.DocRemoverWidget",
    dep  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Model.MongoModel"]
}).dep(
    "Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Model.MongoModel"
);