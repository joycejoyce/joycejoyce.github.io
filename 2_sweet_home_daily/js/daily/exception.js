function MessageFormatException(error, originalMessage) {
    this.error = error;
    this.originalMessage = originalMessage;
}

function Exception(error) {
    this.error = error;
}

export {
    Exception,
    MessageFormatException
};