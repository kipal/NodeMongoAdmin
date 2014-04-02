module.exports = new Service.ClientScript(
    function (ContourBootstrap) {

        function Bootstrap() {
            ContourBootstrap.call(this);

            /* <publish>
            this.run = function () {
                new Service.Core.MVC.MainWidget().render();
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
.setDependencies("Contour.Core.Bootstrap")
.signUp()
.dep("Contour.Core.Bootstrap");