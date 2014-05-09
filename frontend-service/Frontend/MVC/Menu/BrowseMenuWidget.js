module.exports = new Service.ClientScript(
    function (MenuElementWidget, Mongo) {

        function BrowseMenuWidget(parentDom, parentWidget, workAreaView) {

            MenuElementWidget.call(this, 'Browse', parentDom, parentWidget);

            this.polling = function() {
                /*Mongo.getInstance().collections(
                    parentWidget.getCurrentDB(),
                    function (resp) {
                        workAreaView.innerHTML = (resp);
                    }
                );*/
            };
        }

        BrowseMenuWidget.prototype             = MenuElementWidget.prototype;
        BrowseMenuWidget.prototype.constructor = BrowseMenuWidget;

        return BrowseMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.BrowseMenuWidget",
    "dep"  : ["Service.Frontend.MVC.Menu.MenuElementWidget", "Service.Frontend.MVC.Model.MongoModel"]
});