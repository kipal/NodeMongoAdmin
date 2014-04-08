module.exports = new Service.ClientScript(
    function (CommonWidget, MenuView) {

        function MenuWidget(parentDom, parentWidget) {

            this.createView = function () {
                MenuView.call(parentDom, this.actions);
            }.call(this);

            this.run = function () {

            };

            CommonWidget.call(this, parentDom, parentWidget);
        }

        MenuWidget.prototype             = CommonWidget.prototype;
        MenuWidget.prototype.constructor = CommonWidget;

        return MenuWidget;
    }
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.View.Menu")
.out({
    "name" : "Frontend.MVC.MenuWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.View.Menu"]
}).signUp();