module.exports = new Service.ClientScript(
    function (CommonWidget, LeftMenuElementView, MongoModel, DocListWidget) {
        function LeftSubMenuElementWidget(name, parentDom, parentWidget) {

            this.createView = function () {
                LeftMenuElementView.call(parentDom, name);
            }.bind(this);

            this.run = function () {
                this.getView().minusNode.ondblclick = function () {
                    this.removeCollection();
                }.bind(this);
            };

            this.removeCollection = function () {
                MongoModel.getInstance().removeCollection(
                    {
                        dbName         : parentWidget.getName(),
                        collectionName : name
                    },
                    function (resp) {
                        parentWidget.addCollections();
                    }
                );
            };

            CommonWidget.call(this, parentDom, parentWidget);

            this.getDBName = function () {
                return parentWidget.getName();
            };

            this.getCollectionName = function () {
                return name;
            };

            this.browse = function () {
                this.setActive();
                var docList = null;
                MongoModel.getInstance().findAll(
                    {
                        dbName         : parentWidget.getName(),
                        collectionName : name
                    },
                    function (resp) {
                        docList = new DocListWidget(parentWidget.getWorkAreaView(), this, resp).run();
                    }.bind(this)
                );
            };

            this.getView().nameNode.setEvent(
                "onclick",
                this.browse.bind(this)
            );

            this.setActive = function () {
                this.getView().setActive();
                parentWidget.setAllInactive(this);
                parentWidget.setActive();
            };

            this.setInactive = function () {
                parentWidget.getWorkAreaView().setContent("");
                this.getView().setInactive();
            };
        }

        LeftSubMenuElementWidget.prototype             = CommonWidget.prototype;
        LeftSubMenuElementWidget.prototype.constructor = LeftMenuElementView;

        return LeftSubMenuElementWidget;
    }
).signUp({
    "name" : "Frontend.MVC.LeftMenu.LeftSubMenuElementWidget",
    "dep"  : [
        "Contour.Frontend.MVC.CommonWidget",
        "Service.Frontend.MVC.LeftMenu.LeftMenuElementView",
        "Service.Frontend.MVC.Model.MongoModel",
        "Service.Frontend.MVC.Browse.DocListWidget"
    ]
});