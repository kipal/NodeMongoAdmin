module.exports = new Service.ClientScript(
    function (BaseBodyWidget, View, MenuWidget, WorkAreaWidget, LeftMenuWidget) {

        function BodyWidget() {


            this.run = function () {
                this.getView().addStyle(
                    "body", {
                        "background-color" : "lightgrey"
                    }
                );
                this.getView().addStyle(
                    ".cls",
                    {
                        "clear" : "both"
                    }
                );

                this.getView().addStyle(
                        ".link",
                        {
                            "cursor" : "pointer"
                        }
                    );

                var menuView     = this.getView().appendNode("ul");
                var center       = this.getView().appendNode("div");
                    View.call(center);
                    center.id = "center";
                    center.addStyle(
                        "#center",
                        {
                            "width" : "100%"
                        }
                    );
                var leftMenuView = center.appendNode("ul");
                var workView     = center.appendNode("div");

                var workArea = new WorkAreaWidget(workView, this);
                var menu     = new MenuWidget(menuView, this, workArea.getView());
                var leftMenu = new LeftMenuWidget(leftMenuView, this, menu.setCurrentDatabase);

                leftMenu.run();
                menu.run();
                workArea.run();
            };

            BaseBodyWidget.call(this);
        }

        BodyWidget.prototype             = BaseBodyWidget.prototype;
        BodyWidget.prototype.constructor = BodyWidget;

        return BodyWidget;
    }
)
.out({
    "name" : "Frontend.MVC.BodyWidget",
    "dep"  : ["Contour.Frontend.MVC.BodyWidget", "Contour.Frontend.MVC.View", "Frontend.MVC.Menu.MenuWidget", "Frontend.MVC.WorkArea.WorkAreaWidget", "Frontend.MVC.LeftMenu.LeftMenuWidget"]
})
.dep("Contour.Frontend.MVC.BodyWidget", "Contour.Frontend.MVC.View", "Service.Frontend.MVC.Menu.MenuWidget", "Service.Frontend.MVC.WorkArea.WorkAreaWidget", "Service.Frontend.MVC.LeftMenu.LeftMenuWidget")
.signUp();