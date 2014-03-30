module.exports = new Service.ClientScript(
    "Bootstrap",
    "Contour.Core.Bootstrap",
    "public",
    function (ContourBootstrap) {

        function Bootstrap() {
            ContourBootstrap.call(this);
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
).dep("Contour.Core.Bootstrap");