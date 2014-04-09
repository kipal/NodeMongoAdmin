module.exports = new Service.ClientScript(
    function (BaseBodyWidget, MenuWidget, WorkAreaWidget) {

        function BodyWidget() {

            this.run = function () {
                var menu = new MenuWidget(this.getView().appendNode("ul"), this);
                menu.run();

                var workArea = new WorkAreaWidget(this.getView().appendNode("div"), this);
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
    "dep"  : ["Contour.Frontend.MVC.BodyWidget", "Frontend.MVC.Menu.MenuWidget", "Frontend.MVC.WorkAreaWidget"]
})
.dep("Contour.Frontend.MVC.BodyWidget", "Service.Frontend.MVC.Menu.MenuWidget")
.signUp();