module.exports = new Module(
    function (AbstractRegister) {

        function Register() {
            AbstractRegister.call(this);
        }

        Register.prototype             = AbstractRegister.prototype;
        Register.prototype.constructor = Register;

        for (var i in AbstractRegister) {
            if (AbstractRegister.hasOwnProperty(i)) {
                Register[i] = AbstractRegister[i];
            }
        }

        return Register;
    }
).dep("Contour.Core.ClientScript.Register");