module.exports = new Service.ClientScript(
    function (View, InputNode) {

        function DocView(data) {

            View.call(this);

            var newRow = function (withInput, isPrepend) {
                if (isPrepend) {
                    var tmpRow = this.dataList.prependNode("tr");
                } else {
                    var tmpRow = this.dataList.appendNode("tr");
                }
                var tdLeft = tmpRow.appendNode("td");
                var tdRight= tmpRow.appendNode("td");
                var tdLast = tmpRow.appendNode("td");

                tmpRow.left  = tdLeft;
                tmpRow.right = tdRight;

                if (withInput) {
                    tmpRow.key         = tdLeft.appendNode("input");
                    tmpRow.value       = tdRight.appendNode("input");
                    tmpRow.key.value   = withInput.key;
                    tmpRow.value.value = withInput.value;
                }

                tdLeft.style.border  = "1px solid #ccc";
                tdRight.style.border = "1px solid #ccc";
                tdLast.style.border  = "1px solid #ccc";

                if (withInput && "_id" == withInput.key) {
                    tmpRow.key.readOnly   = true;
                    tmpRow.value.readOnly = true;
                } else {
                    var minus = tdLast.appendNode("button");
                    minus.innerHTML = "-";
                    minus.onclick = function () {
                        for (var i in this.dataList.childNodes) {
                            if (tmpRow == this.dataList.childNodes[i]) {
                                this.dataDeregister(tmpRow);
                                this.dataList.removeChild(tmpRow);
                            }
                        }
                    }.bind(this);
                }

                return tmpRow;
            }.bind(this);

            var realData = [];

            this.dataRegister = function (row) {
                realData.push(row);
            };

            this.dataDeregister = function (row) {
                for (var i in realData) {
                    if (row == realData[i]) {
                        delete realData[i];
                    }
                }
            };

            this.getData = function () {
                var result = {};
                for (var i in realData) {
                    try {
                        result[realData[i].key.value] = JSON.parse(realData[i].value.value);
                    } catch (e) {
                        realData[i].value.value       = '"' + realData[i].value.value + '"';
                        result[realData[i].key.value] = JSON.parse(realData[i].value.value);
                    }
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
                var tmpRow     = newRow({
                    key : i,
                    value : JSON.stringify(data[i])
                });

                this.dataRegister(tmpRow);
            }

            this.opRow = newRow();
            this.opRow.left.style.fontWeight = "bold";
            this.opRow.left.innerHTML        = "Operation";

            var plus = this.opRow.right.appendNode("button");
            plus.setContent("+");
            plus.onclick = function () {
                var tmpRow = newRow(
                    {
                        key   : "key",
                        value : "\"value\""
                    },
                    true
                );
                this.dataRegister(tmpRow);
            }.bind(this);

        }

        DocView.prototype             = View.prototype;
        DocView.prototype.constructor = DocView;

        return DocView;
    }
)
.signUp({
    "name" : "Frontend.MVC.Browse.DocView",
    "dep"  : ["Contour.Frontend.MVC.View","Service.Frontend.MVC.Common.InputNode"]
});