module.exports = new Service.ClientScript(
    function (CommonWidget, CollectionsMenuWidget, DataMenuWidget) {

        function MenuWidget(parentDom, parentWidget, workAreaView) {

            CommonWidget.call(this, parentDom, parentWidget);

            var menus = {
               "collections" : new CollectionsMenuWidget(this.getView().appendNode("li"), this, workAreaView),
               "data"        : new DataMenuWidget(this.getView().appendNode("li"), this, workAreaView)
            };


            var currentDB = '';

            this.setCurrentDatabase = function (dbName) {
                currentDB = dbName;
                menus.collections.setActive();
            };

            this.getCurrentDB = function () {
                return currentDB;
            };

            this.setOthersInactive = function (element) {
                for (var i in menus) {
                    if (element !== menus[i]) {
                        menus[i].setInactive();
                    }
                }
            };

            this.run = function () {
                this.getView().id        = "menu";
                this.getView().className = "navbar nav navbar-inverse";
                this.getView().addStyle(
                    "#menu",
                    {
                        "color" : "grey"
                    }
                );

                var cls = this.getView().appendNode("div");
                cls.className = "cls";

                for (var i in menus) {
                    menus[i].run();
                }
            };

        }

        MenuWidget.prototype             = CommonWidget.prototype;
        MenuWidget.prototype.constructor = CommonWidget;

        return MenuWidget;
    }
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Menu.CollectionsMenuWidget")
.out({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : [
          "Contour.Frontend.MVC.CommonWidget",
          "Frontend.MVC.Menu.CollectionsMenuWidget",
          "Frontend.MVC.Menu.DataMenuWidget"
    ]
}).signUp();