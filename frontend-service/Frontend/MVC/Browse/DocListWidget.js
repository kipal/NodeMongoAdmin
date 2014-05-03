module.exports = new Service.ClientScript(
    function (CommonWidget, DocWidget, DocSaverWidget) {

        function DocListWidget(parentDom, parentWidget, collection) {

            CommonWidget.call(this, parentDom, parentWidget);

            var docList = [];

            this.run = function () {
                parentDom.innerHTML = "";

                for (var i in collection) {
                    var tmp = new DocWidget(collection[i], this.getView().appendNode("div"), this);
                    tmp.run();
                    docList.push(tmp);
                }

                new DocSaverWidget(this.getView().appendNode("div"), this).run();
            };

            this.getCollectionName = function() {
                return parentWidget.getCollectionName();
            };

            this.getDBName = function () {
                return parentWidget.getDBName();
            };

            this.removeFromList = function (element, node) {
                this.getView().removeChild(node);
                var i = docList.indexOf(element);
                if (-1 != i) {
                    docList.splice(i, 1);
                }
            };

            this.update = function () {
                parentWidget.browse();
            };
        }

        DocListWidget.prototype             = CommonWidget.prototype;
        DocListWidget.prototype.constructor = CommonWidget;

        return DocListWidget;
    }
).dep("Contour.Frontend.MVC.CommonWidget", "Service.Frontend.MVC.Browse.DocWidget", "Service.Frontend.MVC.Browse.DocSaverWidget")
.signUp({
    "name" : "Frontend.MVC.Browse.DocListWidget",
    "dep"  : ["Contour.Frontend.MVC.CommonWidget", "Frontend.MVC.Browse.DocWidget", "Frontend.MVC.Browse.DocSaverWidget"]
});