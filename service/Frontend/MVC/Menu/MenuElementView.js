module.exports = new Service.ClientScript(
    function (View) {

        function MenuElementView(actions) {


            View.call(this, actions);
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