module.exports = new Service.ClientScript(
    function (MenuElementWidget, Request) {
        function StatusMenuWidget(parentDom, parentWidget, workAreaSetContent) {

            MenuElementWidget.call(this, 'Status', parentDom, parentWidget);

            this.setEvent(
                "onclick",
                function() {
                    this.sendRequest(
                        new Request("db", "collections"),
                        function (respText) {

                            workAreaSetContent(respText);
                        }
                    );
                }.bind(this)
            );
        }

        StatusMenuWidget.prototype             = MenuElementWidget.prototype;
        StatusMenuWidget.prototype.constructor = StatusMenuWidget;

        return StatusMenuWidget;
    }
).signUp({
    "name" : "Frontend.MVC.Menu.StatusMenuWidget",
    "dep"  : ["Frontend.MVC.Menu.MenuElementWidget", "Contour.Core.Http.Request"]
}).dep("Service.Frontend.MVC.Menu.MenuElementWidget", "Contour.Core.Http.Request");