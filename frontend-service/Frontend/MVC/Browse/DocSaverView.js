module.exports = new Service.ClientScript(
    function (View, InputNode) {

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
            this.className = "docSaver";
            this.setContent("Add new document");

            this.addStyle(
                ".docSaver",
                {
                    "border"      : "1px solid black",
                    "width"       : "300px",
                    "margin-top"  : "20px",
                    "margin-left" : "5px",
                    "padding"     : "5px"
                }
            );

            var box = this.appendNode("table");
            box.style.border = "1px solid grey";
            box.style.marginTop = "15px";

            var addField = function () {
                var row = box.appendNode("tr");
                var keyInput   = row.appendNode("td").appendNode("input", InputNode);
                keyInput.setPlaceHolder("New key");
                var valueInput = row.appendNode("td").appendNode("input", InputNode);
                valueInput.setPlaceHolder("New value");
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
    "dep"  : ["Contour.Frontend.MVC.View", "Service.Frontend.MVC.Common.InputNode"]
});