module.exports = new Service.ClientScript(
    function (View) {

        function Menu(actions) {

            this.innerHTML = "<ul id='menu'>"
                + "<li>Datebases</li>"
                + "<li>Collect</li>"
                + "</ul>";

            View.call(this, actions);

            this.addStyle("#menu", {
                "background-color" : "red",
                "list-style" : "none"
            });

            this.addStyle("#menu li", {
                "float"       : "left",
                "margin-left" : "10px"
            });

        }

        Menu.prototype             = View.prototype;
        Menu.prototype.constructor = Menu;

        return Menu;
    }
).dep("Contour.Core.MVC.View")
.out({
    "name" : "Frontend.MVC.View.Menu",
    "dep"  : "Contour.Core.MVC.View"
})
.signUp();