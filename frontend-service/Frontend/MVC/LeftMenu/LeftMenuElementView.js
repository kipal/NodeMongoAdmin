module.exports = new Service.ClientScript(
    function (View) {

        function LeftMenuElementView() {

            View.call(this);

            this.className = "leftMenuElem link";

            this.addStyle(
                ".leftMenuElem",
                {
                    "list-style" : "none"
                }
            );


            this.setActive = function () {
                this.style.backgroundColor = "blue";
            };

            this.setInactive = function () {
                this.style.backgroundColor = "inherit";
            };
        }

        LeftMenuElementView.prototype             = View.prototype;
        LeftMenuElementView.prototype.constructor = LeftMenuElementView;

        return LeftMenuElementView;
    }
)
.signUp({
    "name" : "Frontend.MVC.LeftMenu.LeftMenuElementView",
    "dep"  : "Contour.Frontend.MVC.View"
})
.dep("Contour.Frontend.MVC.View");