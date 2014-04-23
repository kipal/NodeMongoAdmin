module.exports = new Service.ClientScript(
    function (BaseView) {
        function WorkArea(actions) {

            this.id = "workArea";

            BaseView.call(this, actions);

            this.addStyle(
                 "#workArea",
                 {
                     "background-image" : this.getImgSrcForCss("jaj.png"),
                     "height"           : "800px",
                     "width"            : "1100px"
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