
module.exports = new Service.ClientScript(
    function (View) {

        function MenuElementView() {

            View.call(this);

            this.className = "menuElem link";

            this.addStyle(
                ".menuElem",
                {
                    "float"       : "left",
                    "margin-left" : "5px"
                }
            );

        }

        MenuElementView.prototype             = View.prototype;
        MenuElementView.prototype.constructor = MenuElementView;

        return MenuElementView;
    }
)
.signUp({
    "name" : "Frontend.MVC.Menu.MenuElementView",
    "dep"  : "Contour.Frontend.MVC.View"
})
.dep("Contour.Frontend.MVC.View");