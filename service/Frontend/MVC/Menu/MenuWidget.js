module.exports = new Service.ClientScript(
    function (CommonWidget, MenuElementWidget) {

        function MenuWidget(parentDom, parentWidget) {

            CommonWidget.call(this, parentDom, parentWidget);

            this.getView().id = "menu";

            var menus = {
               "database" : new MenuElementWidget("Databases", this.getView().appendNode("li"), this),
               "collects" : new MenuElementWidget("Collects", this.getView().appendNode("li"), this),
               "settings" : new MenuElementWidget("Settings", this.getView().appendNode("li"), this)
            };

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
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Menu.MenuElementWidget")
.out({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Menu.MenuElementWidget"]
}).signUp();