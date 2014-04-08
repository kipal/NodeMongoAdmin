module.exports = new Service.ClientScript(
    function (CommonWidget) {
        function WorkAreaWidget(parentDom, parentWidget) {

            this.run = function () {
                this.getView().innerHTML = "WorkArea";
            };

            CommonWidget.call(this, parentDom, parentWidget);
        }

        WorkAreaWidget.prototype             = CommonWidget.prototype;
        WorkAreaWidget.prototype.constructor = WorkAreaWidget;

        return WorkAreaWidget;
    }
).out({
    "name" : "Frontend.MVC.WorkAreaWidget",
    "dep"  : "Contour.Frontend.MVC.CommonWidget"
}).dep("Contour.Frontend.MVC.CommonWidget")
.signUp();