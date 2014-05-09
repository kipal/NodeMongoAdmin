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
                    "margin"           : "auto",
                    "position"         : "absolute",
                    "top"              : 0,
                    "bottom"           : 0,
                    "left"             : 0,
                    "right"            : 0,
                    "width"            : "640px",
                    "height"           : "480px",
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