module.exports = new Service.ClientScript(
    function (BaseBodyWidget, MenuWidget, WorkAreaWidget) {

        function BodyWidget() {


            this.run = function () {
                this.getView().addStyle(
                    ".cls",
                    {
                        "clear" : "both"
                    }
                );

                var workArea = new WorkAreaWidget(this.getView().appendNode("div"), this);
                var menu     = new MenuWidget(this.getView().prependNode("ul"), this, workArea.setContent);
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
    "dep"  : ["Contour.Frontend.MVC.BodyWidget", "Frontend.MVC.Menu.MenuWidget", "Frontend.MVC.WorkArea.WorkAreaWidget"]
})
.dep("Contour.Frontend.MVC.BodyWidget", "Service.Frontend.MVC.Menu.MenuWidget")
.signUp();