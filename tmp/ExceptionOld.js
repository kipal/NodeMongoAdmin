module.exports = (function() {
    /**
     * Basic exception class.
     *
     * @constructor
     */
    function Exception(msg) {
        if (undefined === msg || null === msg) {
            throw 'You should give an exception message!';
        }

        Error.call(this, msg);
        this.name = this.__proto__.constructor.name;
    };

    Exception.prototype             = Error.prototype;
    Exception.prototype.constructor = Exception;


    function NotFoundException(msg) {
        Exception.call(this, msg);
    };

    NotFoundException.prototype             = Exception.prototype;
    NotFoundException.prototype.constructor = NotFoundException;


    function NotObjectException(msg) {
        Exception.call(this, msg);
    };

    NotObjectException.prototype             = Exception.prototype;
    NotObjectException.prototype.constructor = NotObjectException;

    return {
        AbstractMethodException : AbstractMethodException,
        NotFoundException       : NotFoundException,
        NotObjectException      : NotObjectException
    };
}());