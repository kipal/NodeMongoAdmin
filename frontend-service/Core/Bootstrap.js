module.exports = new Service.ClientScript(
    function (ContourBootstrap, BodyWidget) {

        function Bootstrap() {
            ContourBootstrap.call(this);

            /* <publish>
            this.run = function () {
                new BodyWidget().run();
            };
            </publish> */
        }

        Bootstrap.prototype             = ContourBootstrap.prototype;
        Bootstrap.prototype.constructor = Bootstrap;

        /* <private> */
        return Bootstrap;
        /* </private> */

        /* <publish>
        var bootstrap = new Bootstrap();
        document.addEventListener("DOMContentLoaded", bootstrap.run, true);
        </publish> */
    }
).setName("Core.Bootstrap")
.setDependencies(["Contour.Core.Bootstrap", "Frontend.MVC.BodyWidget"])
.signUp()
.dep("Contour.Core.Bootstrap", "Service.Frontend.MVC.BodyWidget");