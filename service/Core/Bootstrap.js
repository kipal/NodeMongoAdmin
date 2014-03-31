module.exports = new Service.ClientScript(
    function (ContourBootstrap) {

        function Bootstrap() {
            ContourBootstrap.call(this);

            /* <publish>
            this.run = function () {

            };
            </publish> */
        }

        Bootstrap.prototype             = ContourBootstrap.prototype;
        Bootstrap.prototype.constructor = Bootstrap;

        /* <private> */
        return Bootstrap;
        /* </private> */

        /* <publish>
        return new Bootstrap().run();
        </publish> */
    }
).setName("Core.Bootstrap")
.setDependencies("Contour.Core.Bootstrap")
.signUp()
.dep("Contour.Core.Bootstrap");