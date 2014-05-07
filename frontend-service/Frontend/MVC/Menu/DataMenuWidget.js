module.exports = new Service.ClientScript(
    function (MenuElementWidget, Mongo) {
        function DataMenuWidget(parentDom, parentWidget, workAreaView) {

            MenuElementWidget.call(this, 'Data', parentDom, parentWidget);

            this.polling = function() {
                Mongo.getInstance().findAll(
                    {
                        dbName         : parentWidget.getCurrentDB(),
                        collectionName : "system.indexes"
                    },
                    function (resp) {
                        workAreaView.innerHTML = JSON.stringify(resp);
                    }
                );
            };
        }

        DataMenuWidget.prototype             = MenuElementWidget.prototype;
        DataMenuWidget.prototype.constructor = DataMenuWidget;

        return DataMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.DataMenuWidget",
    "dep"  : ["Frontend.MVC.Menu.MenuElementWidget", "Frontend.MVC.Model.MongoModel"]
}).dep("Service.Frontend.MVC.Menu.MenuElementWidget", "Service.Frontend.MVC.Model.MongoModel");