class NotFoundMessage extends Error {
    constructor(message) {
        super(message);
        this.status = 404;
        this.name = "NotFoundMessage";
    }
}

module.exports = NotFoundMessage;