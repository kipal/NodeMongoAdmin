module.exports = new Service.ClientScript(
    function (ContourBootstrap, BodyWidget, HeadWidget) {

        function Bootstrap() {
            ContourBootstrap.call(this);

            /* <publish>
            this.run = function () {
                var head = new HeadWidget();
                head.setTitle("NodeMongoAdmin");
                head.run();
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
.setDependencies(["Contour.Core.Bootstrap", "Frontend.MVC.BodyWidget", "Contour.Frontend.MVC.HeadWidget"])
.signUp()
.dep("Contour.Core.Bootstrap", "Service.Frontend.MVC.BodyWidget", "Contour.Frontend.MVC.HeadWidget");