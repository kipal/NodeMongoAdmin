module.exports = new Service.ClientScript(
    function (MenuElementWidget, WorkAreaWidget, LeftMenuWidget) {

        function BrowseMenuWidget(parentDom, parentWidget, centerView) {

            MenuElementWidget.call(this, 'Browse', parentDom, parentWidget);

            this.polling = function() {
                centerView.setContent("");

                var workArea = new WorkAreaWidget(centerView.appendNode("div"), this);
                var leftMenu = new LeftMenuWidget(centerView.prependNode("ul"), this, workArea.getView());

                leftMenu.run();
                workArea.run();

            };
        }

        BrowseMenuWidget.prototype             = MenuElementWidget.prototype;
        BrowseMenuWidget.prototype.constructor = BrowseMenuWidget;

        return BrowseMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.BrowseMenuWidget",
    "dep"  : [
        "Service.Frontend.MVC.Menu.MenuElementWidget",
        "Service.Frontend.MVC.WorkArea.WorkAreaWidget",
        "Service.Frontend.MVC.LeftMenu.LeftMenuWidget"
    ]
});