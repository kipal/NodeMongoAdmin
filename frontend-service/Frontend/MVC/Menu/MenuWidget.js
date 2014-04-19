module.exports = new Service.ClientScript(
    function (CommonWidget, MenuElementWidget, Request) {

        function MenuWidget(parentDom, parentWidget, workAreaSetContent) {

            CommonWidget.call(this, parentDom, parentWidget);

            this.getView().id = "menu";

            var menus = {
               "database" : new MenuElementWidget("Databases", this.getView().appendNode("li"), this, workAreaSetContent),
               "collects" : new MenuElementWidget("Collects", this.getView().appendNode("li"), this, workAreaSetContent),
               "settings" : new MenuElementWidget("Settings", this.getView().appendNode("li"), this, workAreaSetContent)
            };

            menus.database.setEvent(
                "onclick",
                function() {
                    this.sendRequest(
                        new Request("db", "listDatabases"),
                        function (respText) {

                            workAreaSetContent(respText);
                        }
                    );
                }.bind(menus.database)
            );

            this.getView().addStyle(
                "#menu",
                {
                    "list-style" : "none"
                }
            );

            var cls = this.getView().appendNode("div")
            cls.className = "cls";

            this.run = function () {
            };

        }

        MenuWidget.prototype             = CommonWidget.prototype;
        MenuWidget.prototype.constructor = CommonWidget;

        return MenuWidget;
    }
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Menu.MenuElementWidget", "Contour.Core.Http.Request")
.out({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Menu.MenuElementWidget", "Contour.Core.Http.Request"]
}).signUp();