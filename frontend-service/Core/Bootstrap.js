module.exports = new Service.ClientScript(
    function (ContourBootstrap, BodyWidget, HeadWidget, RequestHandler, Router, Server, ResponseHandler) {

        function Bootstrap(serverConfig) {
            ContourBootstrap.call(this);

            /* <publish>
            this.run = function () {
                var head = new HeadWidget();
                head.setTitle("NodeMongoAdmin");
                head.run();
                new BodyWidget().run();
            };
            </publish> */

            /* <private> */
            this.run = function () {
                var reqHandler = new RequestHandler();
                reqHandler.setServerConfig(serverConfig);
                var router     = new Router(reqHandler);

                this.setCurrentServer(
                    new Server(
                        serverConfig.frontend.web.port,
                        new ResponseHandler(Service.ClientScript.getRegister(), router)
                    )
                );

                this.getCurrentServer().start();
            };
            /* </private> */
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
).signUp({
    name : "Core.Bootstrap",
    dep  : [
        "Contour.Core.Bootstrap",
        "Service.Frontend.MVC.BodyWidget",
        "Contour.Frontend.MVC.HeadWidget",
        "Contour.Frontend.Http.RequestHandler",
        "Contour.Frontend.Http.Router",
        "Contour.Frontend.Http.Server",
        "Contour.Frontend.Http.ResponseHandler"
    ]
});