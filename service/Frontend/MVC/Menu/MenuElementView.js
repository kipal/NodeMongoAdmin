module.exports = new Service.ClientScript(
    function (View) {

        function MenuElementView(actions) {

            View.call(this, actions);

            this.className = "menuElem";

            this.addStyle(
                ".menuElem",
                {
                    "border"      : "1px solid black",
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
    "dep"  : "Contour.Core.MVC.View"
})
.dep("Contour.Core.MVC.View");