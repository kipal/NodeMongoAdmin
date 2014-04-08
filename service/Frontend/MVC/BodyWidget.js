module.exports = new Service.ClientScript(
    function (BaseBodyWidget, MenuWidget) {

        function BodyWidget() {

            this.run = function () {
                var menu = new MenuWidget(this.getView().appendNode("div"), this);
                menu.run();
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
    "dep"  : ["Contour.Frontend.MVC.BodyWidget", "Frontend.MVC.MenuWidget"]
})
.dep("Contour.Frontend.MVC.BodyWidget", "Service.Frontend.MVC.MenuWidget")
.signUp();