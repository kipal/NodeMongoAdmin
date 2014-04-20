module.exports = new Service.ClientScript(
    function (CommonWidget, DatabaseMenuWidget, StatusMenuWidget) {

        function MenuWidget(parentDom, parentWidget, workAreaSetContent) {

            CommonWidget.call(this, parentDom, parentWidget);

            this.getView().id = "menu";

            var menus = {
               "database" : new DatabaseMenuWidget(this.getView().appendNode("li"), this, workAreaSetContent),
               "status"   : new StatusMenuWidget(this.getView().appendNode("li"), this, workAreaSetContent)
            };

            this.getView().addStyle(
                "#menu",
                {
                    "list-style" : "none"
                }
            );

            var cls = this.getView().appendNode("div");
            cls.className = "cls";

            this.run = function () {
            };

        }

        MenuWidget.prototype             = CommonWidget.prototype;
        MenuWidget.prototype.constructor = CommonWidget;

        return MenuWidget;
    }
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Menu.DatabaseMenuWidget", "Service.Frontend.MVC.Menu.StatusMenuWidget")
.out({
    "name" : "Frontend.MVC.Menu.MenuWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Menu.DatabaseMenuWidget", "Frontend.MVC.Menu.StatusMenuWidget"]
}).signUp();