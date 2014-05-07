module.exports = new Service.ClientScript(
    function (View) {

        function MenuElementView() {


            View.call(this);

            this.setContent = function (content) {
                nameLink.setContent(content);
            };

            var nameLink = this.appendNode("a");
            nameLink.href = "#";

            this.setActive = function () {
                this.className = "active";
            };

            this.setInactive = function () {
                this.className = nameLink.className.replace("active", "");
            };


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