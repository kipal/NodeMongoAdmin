module.exports = new Service.ClientScript(
    function (CommonWidget, MenuElementView) {
        function MenuElementWidget(name, parentDom, parentWidget, centerView) {

            this.createView = function () {
                MenuElementView.call(parentDom);
            }.bind(this);

            CommonWidget.call(this, parentDom, parentWidget);

            this.run = function () {
                this.getView().setContent(name);
            };

            this.polling = function (workAreaFn) {
                throw 'MenuElementWidget::polling() is abstract!';
            };

            this.setActive = function () {
                parentWidget.setOthersInactive(this);
                this.getView().setActive();

                this.polling();
            };

            this.setInactive = function () {
                this.getView().setInactive();
            };

            this.setEvent(
                "onclick",
                this.setActive.bind(this)
            );
        }

        MenuElementWidget.prototype             = CommonWidget.prototype;
        MenuElementWidget.prototype.constructor = MenuElementView;

        return MenuElementWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.MenuElementWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Menu.MenuElementView"]
});