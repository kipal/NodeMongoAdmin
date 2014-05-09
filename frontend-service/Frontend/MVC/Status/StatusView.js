module.exports = new Service.ClientScript(
    function (View) {

        function StatusView(status) {

            View.call(this);

            this.recursiveIterator = function (o, view) {
                var main = view.appendNode("ul");
                for (var i in o) {
                    var child = main.appendNode("li");
                    child.setContent(i);

                    if (o[i] instanceof Object) {
                        this.recursiveIterator(o[i], child);
                    } else {
                        child.setContent(child.innerHTML + " : " + o[i]);
                    }
                }
            };

            this.recursiveIterator(status, this);
        }

        StatusView.prototype             = View.prototype;
        StatusView.prototype.constructor = StatusView;

        return StatusView;
    }
)
.signUp({
    "name" : "Frontend.MVC.Status.StatusView",
    "dep"  : "Contour.Frontend.MVC.View"
});