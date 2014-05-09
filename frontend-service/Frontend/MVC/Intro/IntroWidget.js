module.exports = new Service.ClientScript(
    function (CommonWidget, IntroView) {

        function IntroWidget(parentDom, parentWidget) {
            this.createView = function () {
                 IntroView.call(parentDom);
            }.bind(this);

            CommonWidget.call(this, parentDom, parentWidget);

            this.run = function () {
                this.getView().style.opacity = 1;
                this.getView().setEvent(
                    "onclick",
                    this.fadeOut.bind(this)
                );
            };

            this.fadeOut = function () {
                if (0 < this.getView().style.opacity) {
                    this.getView().style.opacity -= 0.3;

                    setTimeout(this.fadeOut.bind(this), 100);
                } else {
                    this.getView().style.display = "none";
                }
            };

        }

        IntroWidget.prototype             = CommonWidget.prototype;
        IntroWidget.prototype.constructor = IntroWidget;

        return IntroWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Intro.IntroWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Intro.IntroView"]
});