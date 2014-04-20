module.exports = new Service.ClientScript(
    function (MenuElementWidget, Request) {
        function DatabaseMenuWidget(parentDom, parentWidget, workAreaSetContent) {

            MenuElementWidget.call(this, 'Databases', parentDom, parentWidget);

            this.setEvent(
                "onclick",
                function() {
                    this.sendRequest(
                        new Request("db", "listDatabases"),
                        function (respText) {

                            workAreaSetContent(respText);
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
    "dep"  : ["Frontend.MVC.Menu.MenuElementWidget", "Contour.Core.Http.Request"]
}).dep("Service.Frontend.MVC.Menu.MenuElementWidget", "Contour.Core.Http.Request");