module.exports = new Service.ClientScript(
    function (View) {

        function MenuView() {

            View.call(this);

            this.className = "navbar-inverse navbar";

            var createNavBarHeader = function () {
                this.navBarHeader = this.appendNode("div");
                this.navBarHeader.className = "navbar-header";
                var title = this.navBarHeader.appendNode("a");
                title.className = "navbar-brand";
                title.href = "#";
                title.setContent("NodeMongoAdmin");

            }.bind(this);

            this.menuListNode = null;

            var createNavBarCollapse = function () {
                this.navBarCollapse = this.appendNode("div");
                this.navBarCollapse.className = "collapse navbar-collapse";

                this.menuListNode = this.navBarCollapse.appendNode("ul");
                this.menuListNode.className = "nav navbar-nav";


            }.bind(this);


            createNavBarHeader();
            createNavBarCollapse();
        }

        MenuView.prototype             = View.prototype;
        MenuView.prototype.constructor = MenuView;

        return MenuView;
    }
)
.signUp({
    "name" : "Frontend.MVC.Menu.MenuView",
    "dep"  : "Contour.Frontend.MVC.View"
})
.dep("Contour.Frontend.MVC.View");