module.exports = new Service.ClientScript(
    function (CommonWidget) {

        function CenterWidget(parentDom, parentWidget) {

            CommonWidget.call(this, parentDom, parentWidget);

            this.getView().id = "center";
            this.getView().addStyle(
                "#center",
                {
                    "width" : "100%"
                }
            );

            this.run = function () {
            };

        }

        CenterWidget.prototype             = CommonWidget.prototype;
        CenterWidget.prototype.constructor = CommonWidget;

        return CenterWidget;
    }
).signUp({
    "name" : "Frontend.MVC.CenterWidget",
    "dep"  : [
        "Contour.Frontend.MVC.CommonWidget"
    ]
});