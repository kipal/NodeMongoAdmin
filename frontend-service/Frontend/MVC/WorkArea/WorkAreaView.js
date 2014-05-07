module.exports = new Service.ClientScript(
    function (BaseView) {
        function WorkArea(actions) {

            this.id = "workArea";

            BaseView.call(this, actions);

            this.addStyle(
                 "#workArea",
                 {
                     "border"     : "solid 1px black",
                     "min-height" : "550px",
                     "width"      : "1000px",
                     "float"      : "right"
                 }
            );
        }

        WorkArea.prototype             = BaseView.prototype;
        WorkArea.prototype.constructor = WorkArea;

        return WorkArea;
    }
).signUp({
    "name" : "Frontend.MVC.WorkArea.WorkAreaView",
    "dep"  : "Contour.Frontend.MVC.View"
}).dep("Contour.Frontend.MVC.View");