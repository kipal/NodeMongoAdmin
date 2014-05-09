module.exports = new Service.ClientScript(
    function (CommonWidget, BrowseMenuWidget, DataMenuWidget, MenuView) {

        function MenuWidget(parentDom, parentWidget, workAreaView) {

            this.createView = function () {
                MenuView.call(parentDom);
            }.bind(this);

            CommonWidget.call(this, parentDom, parentWidget);

            var menus = {
               "browse" : new BrowseMenuWidget(this.getView().menuListNode.appendNode("li"), this, workAreaView),
               "status" : new DataMenuWidget(this.getView().menuListNode.appendNode("li"), this, workAreaView)
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
).signUp({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : [
        "Contour.Frontend.MVC.CommonWidget",
        "Service.Frontend.MVC.Menu.BrowseMenuWidget",
        "Service.Frontend.MVC.Menu.DataMenuWidget",
        "Service.Frontend.MVC.Menu.MenuView"
    ]
});