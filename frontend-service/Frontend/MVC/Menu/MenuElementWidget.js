module.exports = new Service.ClientScript(
    function (CommonWidget, MenuElementView) {
        function MenuElementWidget(name, parentDom, parentWidget, workAreaSetContent) {

            this.createView = function () {
                MenuElementView.call(parentDom);
            }.call(this);

            CommonWidget.call(this, parentDom, parentWidget);

            this.getView().innerHTML = name;

            this.polling = function (workAreaFn) {
                throw 'MenuElementWidget::polling() is abstract!';
            };

            this.setActive = function () {
                parentWidget.setOthersInactive(this);
                this.getView().style.color = "white";

                this.polling(workAreaSetContent);
            };

            this.setInactive = function () {
                this.getView().style.color = "inherit";
            };

            this.setEvent(
                "onclick",
                function () {
                    this.setActive();
                }.bind(this)
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