module.exports = new Service.ClientScript(
    function (View) {

        function IntroView() {

            View.call(this);

            this.className = "introScreen";
            this.addStyle(
                "." + this.className,
                {
                    "background-color" : "black",
                    "height"           : "100%",
                    "width"            : "100%",
                    "z-index"          : "100",
                    "position"         : "absolute",
                    "color"            : "white",
                    "font-size"        : "70px",
                    "margin-left"      : "auto",
                    "margin-right"     : "auto"
                }
            );

            var title = this.appendNode("div");
            title.className = "title";
            title.setContent("CLICK");

            this.addStyle(
                "." + title.className,
                {
                    "margin" : "0 auto",
                    "width"  : "25%"
                }
            );
        }

        IntroView.prototype             = View.prototype;
        IntroView.prototype.constructor = IntroView;

        return IntroView;
    }
)
.signUp({
    "name" : "Frontend.MVC.Intro.IntroView",
    "dep"  : ["Contour.Frontend.MVC.View"]
});