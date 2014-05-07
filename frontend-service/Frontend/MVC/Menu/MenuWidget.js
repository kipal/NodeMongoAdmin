module.exports = new Service.ClientScript(
    function (CommonWidget, CollectionsMenuWidget, DataMenuWidget, MenuView) {

        function MenuWidget(parentDom, parentWidget, workAreaView) {

            this.createView = function () {
                MenuView.call(parentDom);
            }.bind(this);

            CommonWidget.call(this, parentDom, parentWidget);

            var menus = {
               "collections" : new CollectionsMenuWidget(this.getView().menuListNode.appendNode("li"), this, workAreaView),
               "data"        : new DataMenuWidget(this.getView().menuListNode.appendNode("li"), this, workAreaView)
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
                /*this.getView().id        = "menu";
                var title = this.getView().prependNode("div");
                title.className = "navbar-brand";
                title.innerHTML = "NodeMongoAdmin";
                this.getView().className = "navbar nav navbar-inverse";
                this.getView().addStyle(
                    "#menu",
                    {
                        "color" : "grey"
                    }
                );*/

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
).dep(
    "Contour.Frontend.MVC.CommonWidget",
    "Service.Frontend.MVC.Menu.CollectionsMenuWidget",
    "Service.Frontend.MVC.Menu.DataMenuWidget",
    "Service.Frontend.MVC.Menu.MenuView"
).out({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : [
          "Contour.Frontend.MVC.CommonWidget",
          "Frontend.MVC.Menu.CollectionsMenuWidget",
          "Frontend.MVC.Menu.DataMenuWidget",
          "Frontend.MVC.Menu.MenuView"
    ]
}).signUp();