module.exports = (function (){
    function createClass(properties, SuperClass) {
        var Class  = function () {};
        SuperClass = SuperClass || Object;

        var setProtected = function () {
            var protect = {};

            //Adding protected.
            if (properties.protect) {

                for (var i in properties.protect) {
                    protect[i] = properties.protect[i];

                    // Set protected properties.
                    Object.defineProperty(this, i, {
                        get : function () {
                            var method = arguments.callee.caller;
                            if (this[method.name] === method || this.soul === method) {
                                return protect[i];
                            } else {
                                throw 'Nem láthatod a protected változót!';
                            }
                        },
                        set : function (value) {
                            var method = arguments.callee.caller;
                            if (this[method.name] === method || this.soul === method) {
                                protect[i] = value;
                            } else {
                                throw 'Nem tudod megváltoztatni a protected változóóóóót!';
                            }
                        }
                    });
                }
            }
        };

        Class = function Class () {
            //Adding privatesed.
            if (properties.privates) {

                for (var i in properties.privates) {
                    // Set privatesed properties.
                    Object.defineProperty(this, i, {
                        get : function () {
                            var method = arguments.callee.caller;

                            if (
                               'privilegeMethod' === method.name
                               || this[method.name] === method
                               || properties.constructorMethod === method
                               //|| (undefined !== this[method.name].soul && this[method.name].soul === method.soul)
                               || this.soul === method
                            ) {

                                return properties.privates[i];
                            } else {
                                throw 'Nem láthatod a privatesed változót!';
                            }
                        },
                        set : function (value) {
                            var method = arguments.callee.caller;

                            if (
                                'privilegeMethod' === method.name
                                || this[method.name] === method
                                || properties.constructorMethod === method
                                //|| undefined !== this[method.name].soul && this[method.name].soul === method.soul
                                || this.soul === method
                            ) {
                                properties.privates[i] = value;
                            } else {
                                throw 'Nem tudod megváltoztatni a privates változóóóóót!';
                            }
                        }
                    });
                }
            }

            var privilegeMethod = function privilegeMethod(input) {
                this.name = input.name;
                this.soul = input;

                return input.bind(this);
            };

            privilegeMethod.prototype = this;

            // Adding privileges.
            if (properties.privileges) {
                for (var i in properties.privileges) {
                    if (undefined === this[i]) {
                        if (properties.privileges[i] instanceof Function) {
                            this[i] = new privilegeMethod(properties.privileges[i]);
                        }
                    }
                }
            }


           setProtected.call(this);
           if (properties.constructorMethod && !this.isConstruated) {
               properties.constructorMethod.apply(this, arguments);
               // SuperClass extends, but real constructor will not run
               this.isConstruated = true;
           }

           SuperClass.apply(this, arguments);
        };

        // instanceof
        var F                       = function () {};
        F.prototype                 = SuperClass.prototype;
        Class.prototype             = new F();
        Class.prototype.constructor = Class;

        if (properties.publics) {
            for (var i in properties.publics) {
                Class.prototype[i] = properties.publics[i];
            }
        }

        return Class;
    };

    return createClass;
}());