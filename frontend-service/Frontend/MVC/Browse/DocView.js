module.exports = new Service.ClientScript(
    function (View) {

        function DocView(data) {

            View.call(this);

            var newRow = function () {
                var tmpRow = this.dataList.appendNode("tr");
                var tdLeft = tmpRow.appendNode("td");
                var tdRight= tmpRow.appendNode("td");

                tdLeft.style.border  = "1px solid #ccc";
                tdRight.style.border = "1px solid #ccc";

                return {
                    key   : tdLeft,
                    value : tdRight
                };
            }.bind(this);

            var realData = {};

            this.dataRegister = function (key, valueField) {
                realData[key] = valueField;
            };

            this.getData = function () {
                var result = {};
                for (var i in realData) {
                    result[i] = JSON.parse(realData[i].value);
                }

                return result;
            };

            this.updateEffect = function () {
                for (var i in this.dataList.childNodes) {
                    var node = this.dataList.childNodes[i];
                    if (node instanceof Node) {
                        node.style.backgroundColor = "grey";
                        setTimeout(
                            function() {
                                this.backgroundColor = "inherit";
                            }.bind(node.style),
                            500
                        );
                    }
                }
            };

            this.className = "doc";

            this.label    = this.appendNode("span");
            this.dataList = this.appendNode("table");

            this.label.className = "link";
            var labelKey = "_id";
            if (data["_id"] === undefined) {
                labelKey = Object.keys(data)[0];
            }
            this.label.innerHTML = ">> " + data[labelKey];
            this.dataList.style.display    = "none";
            this.dataList.style.border     = "1px solid #ccc";
            this.dataList.style.marginLeft = "15px";

            for (var i in data) {
                var tmpRow                             = newRow();
                var tmpValue = tmpRow.value.appendNode("input");
                tmpRow.key.innerHTML                   = i;
                tmpValue.value = JSON.stringify(data[i]);

                this.dataRegister(i, tmpValue);
            }

            this.opRow = newRow();
            this.opRow.key.style.fontWeight = "bold";
            this.opRow.key.innerHTML        = "Operation";
        }

        DocView.prototype             = View.prototype;
        DocView.prototype.constructor = DocView;

        return DocView;
    }
)
.signUp({
    "name" : "Frontend.MVC.Browse.DocView",
    "dep"  : "Contour.Frontend.MVC.View"
})
.dep("Contour.Frontend.MVC.View");