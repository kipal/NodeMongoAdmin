/*Service = {};

require('contour-fw')({
    basicPath   : __dirname,
    serviceRoot : {
        reference       : Service,
        moduleReference : module,
        path            : __dirname + "/service"
    }
});

var serverConfig = require(__dirname + '/config/server-config.js');

serverConfig.frontend.web.setIsCurrent(true);

Contour.Core.Bootstrap.setConfig({
    servers : serverConfig
});

Contour.Core.Bootstrap.run();*/

function isEmpty(obj) {

    // null and undefined are "empty"
    if (obj == null) {
        return true;
    }

    // Assume if it has a length property with a non-zero value
    // that that property is correct.
    if (obj.length > 0) {
        return false;
    }
    if (obj.length === 0) {
        return true;
    }

    // Otherwise, does it have any properties of its own?
    // Note that this doesn't handle
    // toString and valueOf enumeration bugs in IE < 9
    for (var key in obj) {
        if (hasOwnProperty.call(obj, key)) {
            return false;
        }
    }

    return true;
}

global.Require = function () {

};

Require.require = function (variableName) {
    var variablePieces = variableName.split("."),
        root           = Require.hasChild(global, variablePieces[0]);

    if (!root.basePath) {
        throw "Haveeeer hiányzik a basePath a " + variablePieces[0] + "-ból!!!";
    }

    variablePieces.shift();

    return require(root.basePath + "/" + variablePieces.join("/")).getReference();
};

Require.hasChild = function (parentRef, childStr) {
    if (undefined !== parentRef[childStr]) {
        return parentRef[childStr];
    }

    return false;
};

Require.isValid = function (variable) {
    var variablePieces = variable.split("."),
        partReference  = Require.hasChild(global, variablePieces[0]);

    if (!partReference["basePath"]) {

        return false;
    }

    if (isEmpty(partReference)) {

        return false;
    }

    for (var i = 1; i < variablePieces.length || false !== partReference; i++) {
        partReference = Require.hasChild(partReference, variablePieces[i]);
    }

    return partReference;
};

global.Module = function (moduleReference) {
    "use strict";

    this.getReference = function () {

        if (false === this.depRef) {

            return moduleReference;
        }

        if (0 !== this.depRef.length) {

            return moduleReference.apply(this, this.depRef);
        }

        return moduleReference();
    };

    this.depRef = [];

    this.dep = function () {
        if (false === arguments[0]) {

            this.depRef = false;
            return this;
        }

        var depTmp = {};

        for (var i in arguments) {
            depTmp = Require.isValid(arguments[i]);

            if (!depTmp) {
                depTmp = Require.require(arguments[i]);
            }

            this.depRef.push(depTmp);
        }

        return this;
    };
};

global.requireDir = require(__dirname + "/node_modules/contour-fw/node_modules/require-directory/index.js");

global.proba  = require("./proba/");

global.proba2 = require("./proba2/");
console.log("itt");
console.log(proba2)