module.exports = new Service.ClientScript(
    function (AbstractWidget) {
        function Widget() {
            AbstractWidget.call(this, document.getElementsByTagName("body")[0]);

            this.view.template = 'Megyen!';
        }

        Widget.prototype             = AbstractWidget.prototype;
        Widget.prototype.constructor = AbstractWidget;

        return Widget;
}).setName("Core.MVC.MainWidget").setDependencies("Contour.Core.MVC.Widget").dep("Contour.Core.MVC.Widget").signUp();