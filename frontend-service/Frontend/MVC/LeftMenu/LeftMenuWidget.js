module.exports = new Service.ClientScript(
    function (CommonWidget, LeftMenuElementWidget, Mongo, InputNode) {

        function LeftMenuWidget(parentDom, parentWidget, workAreaView) {

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

                    if (first) {
                        leftMenus[resp.databases[first].name].setActive();
                    }

                }.bind(this));
            }.bind(this);

            this.setActiveDB = function (dbName) {
                for (var i in leftMenus) {
                    if (dbName !== i) {
                        leftMenus[i].setInactive();
                    }
                }
            };

            this.addDB = function () {
                Mongo.getInstance().addDatabase(
                    this.getView().newDBName.value,
                    function (resp) {
                        location.reload();
                    }.bind(this)
                );
            };

            this.getWorkAreaView = function () {
                return workAreaView;
            };

            this.run = function () {
                this.getView().id        = "leftMenu";
                this.getView().className = "navbar nav navbar-inverse container";
                this.getView().addStyle(
                    "#leftMenu",
                    {
                        "float"  : "left",
                        "height" : "100%",
                        "width"  : "22%",
                        "color"  : "grey"
                    }
                );

                loadDatabases();

                this.getView().newDBName = this.getView().appendNode("input", InputNode);
                this.getView().newDBName.setPlaceHolder("New database");
                this.getView().newDBName.style.fontSize = "10px";

                this.getView().plusCollection = this.getView().appendNode("button");
                this.getView().plusCollection.style.backgroundColor = "#222";
                this.getView().plusCollection.style.border          = "none";
                this.getView().plusCollection.style.marginLeft      = "5px";
                this.getView().plusCollection.innerHTML             = "+";
                this.getView().plusCollection.onclick = this.addDB.bind(this);
            };

        }

        LeftMenuWidget.prototype             = CommonWidget.prototype;
        LeftMenuWidget.prototype.constructor = CommonWidget;

        return LeftMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.LeftMenu.LeftMenuWidget",
    "dep"  : [
        "Contour.Frontend.MVC.CommonWidget",
        "Service.Frontend.MVC.LeftMenu.LeftMenuElementWidget",
        "Service.Frontend.MVC.Model.MongoModel",
        "Service.Frontend.MVC.Common.InputNode"
    ]
});