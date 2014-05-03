module.exports = new Service.ClientScript(
    function (CommonWidget, Mongo) {

        function DocUpdaterWidget(parentDom, parentWidget) {

            CommonWidget.call(this, parentDom, parentWidget);

            this.run = function () {
                this.getView().innerHTML = "Save";
                this.setEvent("onclick", this.updateDoc.bind(this));
            };

            this.updateDoc = function () {
                Mongo.getInstance().updateById(
                    {
                        dbName         : parentWidget.getDBName(),
                        collectionName : parentWidget.getCollectionName(),
                        data           : parentWidget.getData()
                    },
                    function (resp) {
                        this.updateEffect();
                    }.bind(this)
                );
            };

            this.updateEffect = function () {
                parentWidget.updateEffect();
            };

            this.removeFromList = function () {
                parentWidget.removeFromList();
            };
        }

        DocUpdaterWidget.prototype             = CommonWidget.prototype;
        DocUpdaterWidget.prototype.constructor = DocUpdaterWidget;

        return DocUpdaterWidget;
    }
).signUp({
    name : "Frontend.MVC.Browse.DocUpdaterWidget",
    dep  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Model.MongoModel"]
}).dep(
    "Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Model.MongoModel"
);