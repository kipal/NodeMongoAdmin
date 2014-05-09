module.exports = new Service.ClientScript(
    function (MenuElementWidget, Mongo) {
        function DataMenuWidget(parentDom, parentWidget, centerView) {

            MenuElementWidget.call(this, 'Status', parentDom, parentWidget);

            this.polling = function() {
                centerView.innerHTML = "";
            };
        }

        DataMenuWidget.prototype             = MenuElementWidget.prototype;
        DataMenuWidget.prototype.constructor = DataMenuWidget;

        return DataMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.StatusMenuWidget",
    "dep"  : ["Service.Frontend.MVC.Menu.MenuElementWidget", "Service.Frontend.MVC.Model.MongoModel"]
});