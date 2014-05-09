module.exports = new Service.ClientScript(
    function (MenuElementWidget, Mongo, StatusView) {
        function DataMenuWidget(parentDom, parentWidget, centerView) {

            MenuElementWidget.call(this, 'Status', parentDom, parentWidget);

            this.polling = function() {
                centerView.setContent("");

                Mongo.getInstance().status(
                    function (resp) {
                        StatusView.call(centerView.appendNode("div"), resp);
                    }
                );
            };
        }

        DataMenuWidget.prototype             = MenuElementWidget.prototype;
        DataMenuWidget.prototype.constructor = DataMenuWidget;

        return DataMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.StatusMenuWidget",
    "dep"  : [
        "Service.Frontend.MVC.Menu.MenuElementWidget",
        "Service.Frontend.MVC.Model.MongoModel",
        "Service.Frontend.MVC.Status.StatusView"
    ]
});