module.exports = new Service.ClientScript(
    function (CommonWidget, LeftMenuElementView, LeftSubMenuElementWidget, MongoModel, InputNode) {
        function LeftMenuElementWidget(name, parentDom, parentWidget) {

            this.createView = function () {
                LeftMenuElementView.call(parentDom, name);
            }.bind(this);

            CommonWidget.call(this, parentDom, parentWidget);

            this.getName = function () {
                return name;
            };

            this.getWorkAreaView = function () {
                return parentWidget.getWorkAreaView();
            };

            this.run = function () {
                this.getView().nameNode.onclick = function () {
                    this.addCollections();
                    this.setActive();
                }.bind(this);

                this.getView().minusNode.ondblclick = function () {
                    this.removeDB();
                }.bind(this);

            };

            this.addCollections = function () {
                MongoModel.getInstance().collections(
                    name,
                    function (resp) {
                        this.loadCollectionList(resp);
                        this.addNewCollectionInput();
                    }.bind(this)
                );
            };

            this.addNewCollectionInput = function () {
                var lastListItem = this.getView().collectionList.prependNode("li");
                lastListItem.className = "leftMenuElem";
                this.getView().newCollection = lastListItem.appendNode("input", InputNode);
                this.getView().newCollection.setPlaceHolder("New collection");
                this.getView().newCollection.style.fontSize = "10px";

                var plusCollection = lastListItem.appendNode("button");
                plusCollection.style.backgroundColor = "#222";
                plusCollection.style.border          = "none";
                plusCollection.style.marginLeft      = "5px";
                plusCollection.innerHTML             = "+";
                plusCollection.onclick               = this.addCollection.bind(this);
            };

            this.addCollection = function () {
                MongoModel.getInstance().addCollection(
                    {
                        "dbName"         : this.getName(),
                        "collectionName" : this.getView().newCollection.value
                    },
                    function (resp) {
                        this.addCollections();
                        this.addNewCollectionInput();
                    }.bind(this)
                );
            };

            var collectionListNode = null;
            var collectionList = [];

            this.loadCollectionList = function (collections) {
                if (null === collectionListNode) {
                    collectionListNode = this.getView().collectionList;
                    LeftMenuElementView.call(collectionListNode);
                }

                collectionListNode.innerHTML = "";

                for (var i in collections) {
                    var tmp = new LeftSubMenuElementWidget(collections[i], collectionListNode.appendNode("li"), this);
                    collectionList.push(tmp);
                    tmp.run();
                }
            };

            this.setActive = function () {
                parentWidget.setActiveDB(name);
                this.getView().setActive();
            };

            this.setInactive = function () {
                this.getView().setInactive();
                for (var i in collectionList) {
                    collectionList[i].setInactive();
                }
            };

            this.setAllInactive = function (collectionWidget) {
                for (var i in collectionList) {
                    if (collectionWidget !== collectionList[i]) {
                        collectionList[i].setInactive();
                    }
                }
            };

            this.removeDB = function () {
                MongoModel.getInstance().dropDB(
                    {
                        dbName : this.getName()
                    },
                    function (resp) {
                        if (true === resp) {
                            location.reload();
                        }
                    }.bind(this)
                );
            };
        }

        LeftMenuElementWidget.prototype             = CommonWidget.prototype;
        LeftMenuElementWidget.prototype.constructor = LeftMenuElementView;

        return LeftMenuElementWidget;
    }
).signUp({
    "name" : "Frontend.MVC.LeftMenu.LeftMenuElementWidget",
    "dep"  : [
        "Contour.Frontend.MVC.CommonWidget",
        "Service.Frontend.MVC.LeftMenu.LeftMenuElementView",
        "Service.Frontend.MVC.LeftMenu.LeftSubMenuElementWidget",
        "Service.Frontend.MVC.Model.MongoModel",
        "Service.Frontend.MVC.Common.InputNode"
    ]
});