module.exports = new Service.ClientScript(
    function (CommonWidget, LeftMenuElementWidget, Mongo) {

        function LeftMenuWidget(parentDom, parentWidget, setCurrentDB) {

            CommonWidget.call(this, parentDom, parentWidget);

            var leftMenus = {};

            var loadDatabases = function () {
                Mongo.getInstance().listDatabases(function (resp) {
                    var first = null;

                    for (var i in resp.databases) {
                        if (null === first) {
                            first = i;
                        }

                        leftMenus[resp.databases[i].name] = new LeftMenuElementWidget(resp.databases[i].name, this.getView().appendNode("li"), this);
                        leftMenus[resp.databases[i].name].run();
                    }

                    leftMenus[resp.databases[first].name].setActive();

                }.bind(this));
            }.bind(this);

            this.setActiveDB = function (dbName) {
                setCurrentDB(dbName);
                for (var i in leftMenus) {
                    if (dbName !== i) {
                        leftMenus[i].setInactive();
                    }
                }
            };

            this.run = function () {
                this.getView().id = "leftMenu";

                this.getView().addStyle(
                        "#leftMenu",
                        {
                            "float"  : "left",
                            "height" : "100%",
                            "width"  : "140px"
                        }
                );

                loadDatabases();
            };

        }

        LeftMenuWidget.prototype             = CommonWidget.prototype;
        LeftMenuWidget.prototype.constructor = CommonWidget;

        return LeftMenuWidget;
    }
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.LeftMenu.LeftMenuElementWidget", "Service.Frontend.MVC.Model.MongoModel")
.signUp({
    "name" : "Frontend.MVC.LeftMenu.LeftMenuWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.LeftMenu.LeftMenuElementWidget", "Frontend.MVC.Model.MongoModel"]
});