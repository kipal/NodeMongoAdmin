module.exports = new Service.ClientScript.Module(
    "Bootstrap",
    function () {

        function Bootstrap() {
            this.run = function () {
                console.log("valami");
            };
        }

        /* <publish>
        return new Bootstrap().run();
        </publish> */

        /* <private> */
        return Bootstrap;
        /* </private> */

    }
);