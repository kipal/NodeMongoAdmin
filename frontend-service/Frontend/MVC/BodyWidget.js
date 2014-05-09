module.exports = new Service.ClientScript(
    function (BaseBodyWidget, MenuWidget, IntroWidget, CenterWidget) {

        function BodyWidget() {


            this.run = function () {

                this.getView().addStyle(
                    "body", {
                        "background-color" : "#fff"
                    }
                );
                this.getView().addStyle(
                    ".cls",
                    {
                        "clear" : "both"
                    }
                );

                this.getView().addStyle(
                        ".link",
                        {
                            "cursor" : "pointer"
                        }
                    );
                new IntroWidget(this.getView().appendNode("div", false), this).run();

                var menuView     = this.getView().appendNode("ul");
                var center       = new CenterWidget(this.getView().appendNode("div"), this);

                var menu = new MenuWidget(menuView, this, center);

                menu.run();
            };

            BaseBodyWidget.call(this);
        }

        BodyWidget.prototype             = BaseBodyWidget.prototype;
        BodyWidget.prototype.constructor = BodyWidget;

        return BodyWidget;
    }
).signUp({
    "name" : "Frontend.MVC.BodyWidget",
    "dep"  : [
        "Contour.Frontend.MVC.BodyWidget",
        "Service.Frontend.MVC.Menu.MenuWidget",
        "Service.Frontend.MVC.Intro.IntroWidget",
        "Service.Frontend.MVC.CenterWidget"
    ]
});