module.exports = new Service.ClientScript(
    function (CommonWidget, MenuElementView) {
        function MenuElementWidget(name, parentDom, parentWidget, workAreaSetContent) {

            this.createView = function () {
                MenuElementView.call(parentDom);
            }.call(this);

            CommonWidget.call(this, parentDom, parentWidget)

            this.getView().innerHTML = name;

            this.setEvent(
                "onclick",
                function () {
                    workAreaSetContent(name)
                }
            );
        }

        MenuElementWidget.prototype             = CommonWidget.prototype;
        MenuElementWidget.prototype.constructor = MenuElementView;

        return MenuElementWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.MenuElementWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Menu.MenuElementView"]
}).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Menu.MenuElementView");