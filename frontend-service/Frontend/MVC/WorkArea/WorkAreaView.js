module.exports = new Service.ClientScript(
    function (BaseView) {
        function WorkArea(actions) {

            this.id = "workArea";



            BaseView.call(this, actions);
        }

        WorkArea.prototype             = BaseView.prototype;
        WorkArea.prototype.constructor = WorkArea;

        return WorkArea;
    }
).signUp({
    "name" : "Frontend.MVC.WorkArea.WorkAreaView",
    "dep"  : "Contour.Core.MVC.View"
}).dep("Contour.Core.MVC.View");