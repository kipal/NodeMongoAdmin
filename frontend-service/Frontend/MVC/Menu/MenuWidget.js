module.exports = new Service.ClientScript(
    function (CommonWidget, BrowseMenuWidget, StatusMenuWidget, MenuView) {

        function MenuWidget(parentDom, parentWidget, centerWidget) {

            this.createView = function () {
                MenuView.call(parentDom);
            }.bind(this);

            CommonWidget.call(this, parentDom, parentWidget);

            var menus = {
               "browse" : new BrowseMenuWidget(this.getView().menuListNode.appendNode("li"), this, centerWidget.getView()),
               "status" : new StatusMenuWidget(this.getView().menuListNode.appendNode("li"), this, centerWidget.getView())
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

                var cls = this.getView().appendNode("div");
                cls.className = "cls";

                for (var i in menus) {
                    menus[i].run();
                }

                menus.browse.setActive();
            };

        }

        MenuWidget.prototype             = CommonWidget.prototype;
        MenuWidget.prototype.constructor = CommonWidget;

        return MenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : [
        "Contour.Frontend.MVC.CommonWidget",
        "Service.Frontend.MVC.Menu.BrowseMenuWidget",
        "Service.Frontend.MVC.Menu.StatusMenuWidget",
        "Service.Frontend.MVC.Menu.MenuView"
    ]
});