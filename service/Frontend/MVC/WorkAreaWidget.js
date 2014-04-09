module.exports = new Service.ClientScript(
    function (CommonWidget, WorkAreaView) {
        function WorkAreaWidget(parentDom, parentWidget) {

            this.createView = function () {
                WorkAreaView.call(parentDom, this.actions);
            }.call(this);


            this.run = function () {

            };

            CommonWidget.call(this, parentDom, parentWidget);
        }

        WorkAreaWidget.prototype             = CommonWidget.prototype;
        WorkAreaWidget.prototype.constructor = WorkAreaWidget;

        return WorkAreaWidget;
    }
).out({
    "name" : "Frontend.MVC.WorkAreaWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.View.WorkArea"]
}).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.View.WorkArea")
.signUp();