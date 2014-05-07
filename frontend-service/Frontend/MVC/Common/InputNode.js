module.exports = new Service.ClientScript(
    function (View) {

        function InputNode(placeHolder) {

            View.call(this);

            this.setPlaceHolder = function (value) {
                placeHolder = value;
                this.value = placeHolder;
            };

            this.onclick = function () {
                this.value = "";
            };

            this.onblur = function () {
                if ("" == this.value) {
                    this.value = placeHolder;
                }
            };

            if (undefined === placeHolder) {
                this.setPlaceHolder("emptyPlaceholder");
            };
        }

        InputNode.prototype             = View.prototype;
        InputNode.prototype.constructor = InputNode;

        return InputNode;
    }
)
.signUp({
    "name" : "Frontend.MVC.Common.InputNode",
    "dep"  : "Contour.Frontend.MVC.View"
})
.dep("Contour.Frontend.MVC.View");