module.exports = new Service.ClientScript(
    function (CommonWidget, Mongo, DocSaverView) {

        function DocSaverWidget(parentDom, parentWidget) {

            this.createView = function () {
                DocSaverView.call(parentDom);
            }.call(this);

            CommonWidget.call(this, parentDom, parentWidget);

            this.run = function () {
                this.getView().save.onclick = this.save.bind(this);
            };

            this.save = function () {
                Mongo.getInstance().save(
                    {
                        dbName         : parentWidget.getDBName(),
                        collectionName : parentWidget.getCollectionName(),
                        data           : this.getView().getElements()
                    },
                    function (resp) {
                        parentWidget.update();
                    }
                );

                this.getView().removeAll();
            };


        }

        DocSaverWidget.prototype             = CommonWidget.prototype;
        DocSaverWidget.prototype.constructor = DocSaverWidget;

        return DocSaverWidget;
    }
).signUp({
    name : "Frontend.MVC.Browse.DocSaverWidget",
    dep  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Model.MongoModel", "Frontend.MVC.Browse.DocSaverView"]
}).dep(
    "Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Model.MongoModel", "Service.Frontend.MVC.Browse.DocSaverView"
);