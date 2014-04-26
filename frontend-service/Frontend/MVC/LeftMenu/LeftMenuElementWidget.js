module.exports = new Service.ClientScript(
    function (CommonWidget, LeftMenuElementView) {
        function LeftMenuElementWidget(name, parentDom, parentWidget) {

            this.createView = function () {
                LeftMenuElementView.call(parentDom);
            }.call(this);

            CommonWidget.call(this, parentDom, parentWidget);

            this.run = function () {

            };

            this.getView().innerHTML = name;

            this.setActive = function () {
                parentWidget.setActiveDB(name);
                this.getView().setActive();
            };

            this.setInactive = function () {
                this.getView().setInactive();
            };

            this.setEvent(
                "onclick",
                function () {
                    this.setActive();
                }.bind(this)
            );
        }

        LeftMenuElementWidget.prototype             = CommonWidget.prototype;
        LeftMenuElementWidget.prototype.constructor = LeftMenuElementView;

        return LeftMenuElementWidget;
    }
).signUp({
    "name" : "Frontend.MVC.LeftMenu.LeftMenuElementWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.LeftMenu.LeftMenuElementView"]
}).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.LeftMenu.LeftMenuElementView");