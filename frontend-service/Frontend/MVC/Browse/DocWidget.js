module.exports = new Service.ClientScript(
    function (CommonWidget, DocView, DocRemoverWidget, DocUpdaterWidget) {

        function DocWidget(data, parentDom, parentWidget) {

            this.createView = function () {
                DocView.call(parentDom, data);
            }.bind(this);

            CommonWidget.call(this, parentDom, parentWidget);

            this.run = function () {
                this.getView().label.setEvent(
                    "onclick",
                    function () {
                        if ('none' === this.dataList.style.display) {
                            this.dataList.style.display = "table";
                        } else {
                            this.dataList.style.display = "none";
                        }
                    }.bind(this.getView())
                );

                new DocUpdaterWidget(this.getView().opRow.value.appendNode("button"), this).run();
                new DocRemoverWidget(this.getView().opRow.value.appendNode("button"), this).run();
            };

            this.getCollectionName = function() {
                return parentWidget.getCollectionName();
            };

            this.getDBName = function () {
                return parentWidget.getDBName();
            };

            this.getOriginalData = function () {
                return data;
            };

            this.getData = function () {
                return this.getView().getData();
            };

            this.removeFromList = function () {
                parentWidget.removeFromList(this, this.getView());
            };

            this.updateEffect = function () {
                this.getView().updateEffect();
            };
        }

        DocWidget.prototype             = CommonWidget.prototype;
        DocWidget.prototype.constructor = DocWidget;

        return DocWidget;
    }
).signUp({
    name : "Frontend.MVC.Browse.DocWidget",
    dep  : [
        "Contour.Frontend.MVC.CommonWidget",
        "Service.Frontend.MVC.Browse.DocView",
        "Service.Frontend.MVC.Browse.DocRemoverWidget",
        "Service.Frontend.MVC.Browse.DocUpdaterWidget"
    ]
});