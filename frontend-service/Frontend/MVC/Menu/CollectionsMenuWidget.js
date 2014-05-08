module.exports = new Service.ClientScript(
    function (MenuElementWidget, Mongo) {
        function CollectionsMenuWidget(parentDom, parentWidget, workAreaView) {

            MenuElementWidget.call(this, 'Collections', parentDom, parentWidget);

            this.polling = function() {
                /*Mongo.getInstance().collections(
                    parentWidget.getCurrentDB(),
                    function (resp) {
                        workAreaView.innerHTML = (resp);
                    }
                );*/
            };
        }

        CollectionsMenuWidget.prototype             = MenuElementWidget.prototype;
        CollectionsMenuWidget.prototype.constructor = CollectionsMenuWidget;

        return CollectionsMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.CollectionsMenuWidget",
    "dep"  : ["Service.Frontend.MVC.Menu.MenuElementWidget", "Service.Frontend.MVC.Model.MongoModel"]
});