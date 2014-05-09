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
            title.title     = "Click to continue!";

            this.addStyle(
                "." + title.className,
                {
                    "margin"           : "0 auto",
                    "width"            : "50%",
                    "height"           : "100%",
                    "background-image" : this.getImgSrcForCss("intro.png"),
                    "background-repeat": "no-repeat"
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