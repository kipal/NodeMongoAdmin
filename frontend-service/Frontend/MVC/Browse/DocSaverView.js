module.exports = new Service.ClientScript(
    function (View) {

        function DocSaverView() {

            var elements = [];

            var registerElement = function (keyInput, valueInput) {
                elements.push({
                    key   : keyInput,
                    value : valueInput
                });
            };

            var deregisterElement = function (key) {
                for (var i in elements) {
                    if (key = elements[i].key) {
                        delete elements[i];

                        return;
                    }
                }
            };

            this.getElements = function () {
                var result = {};
                for (var i in elements) {
                    result[elements[i].key.value] = elements[i].value.value;
                }

                return result;
            };

            View.call(this);

            var box = this.appendNode("table");
            box.style.border = "1px solid grey";
            box.style.marginTop = "15px";

            var addField = function () {
                var row = box.appendNode("tr");
                var keyInput   = row.appendNode("td").appendNode("input");
                var valueInput = row.appendNode("td").appendNode("input");
                var minus      = row.appendNode("td").appendNode("button");

                minus.innerHTML = "-";
                minus.setEvent(
                    "onclick",
                    this.removeElement.bind(this, row, keyInput)
                );

                keyInput.style.fontSize   = "10px";
                valueInput.style.fontSize = "10px";

                registerElement(keyInput, valueInput);
            }.bind(this);

            this.removeElement = function (row, keyInput) {
                if (1 < box.childNodes.length) {
                    box.removeChild(row);
                    deregisterElement(keyInput);
                }
            };

            this.removeAll = function () {
                var l = box.childNodes.length;
                elements = [];
                for (var i = 0; i < l; i++) {
                    if (box.childNodes[i] instanceof Node) {
                        box.removeChild(box.childNodes[i]);
                        i--;
                    }
                }

                addField();
            };

            var plus = this.appendNode("button");
            plus.innerHTML = "+";
            plus.onclick = addField;

            this.save = this.appendNode("button");
            this.save.innerHTML = "Save";


            addField();
        }

        DocSaverView.prototype             = View.prototype;
        DocSaverView.prototype.constructor = DocSaverView;

        return DocSaverView;
    }
)
.signUp({
    "name" : "Frontend.MVC.Browse.DocSaverView",
    "dep"  : "Contour.Frontend.MVC.View"
})
.dep("Contour.Frontend.MVC.View");