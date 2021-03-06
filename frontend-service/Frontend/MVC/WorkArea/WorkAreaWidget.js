module.exports = new Service.ClientScript(
    function (CommonWidget, WorkAreaView) {
        function WorkAreaWidget(parentDom, parentWidget) {

            this.createView = function () {
                return WorkAreaView.call(parentDom, this.actions);
            }.bind(this);


            this.run = function () {

            };

            CommonWidget.call(this, parentDom, parentWidget);
        }

        WorkAreaWidget.prototype             = CommonWidget.prototype;
        WorkAreaWidget.prototype.constructor = WorkAreaWidget;

        return WorkAreaWidget;
    }
).signUp({
    "name" : "Frontend.MVC.WorkArea.WorkAreaWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.WorkArea.WorkAreaView"]
});