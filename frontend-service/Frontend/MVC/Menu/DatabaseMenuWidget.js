module.exports = new Service.ClientScript(
    function (MenuElementWidget, Mongo) {
        function DatabaseMenuWidget(parentDom, parentWidget, workAreaView) {

            MenuElementWidget.call(this, 'Databases', parentDom, parentWidget);

            this.setEvent(
                "onclick",
                function() {
                    Mongo.getInstance().listDatabases(
                        function (resp) {
                            workAreaView.innerHTML = resp;
                        }
                    );
                }.bind(this)
            );
        }

        DatabaseMenuWidget.prototype             = MenuElementWidget.prototype;
        DatabaseMenuWidget.prototype.constructor = DatabaseMenuWidget;

        return DatabaseMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.DatabaseMenuWidget",
    "dep"  : ["Frontend.MVC.Menu.MenuElementWidget", "Frontend.MVC.Model.MongoModel"]
}).dep("Service.Frontend.MVC.Menu.MenuElementWidget", "Service.Frontend.MVC.Model.MongoModel");