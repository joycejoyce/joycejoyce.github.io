function Message() {}
Message.create = function(type) {
    switch(type) {
        case MSG_TYPE_MEMBER_CHAT:
            return new MemberChatMessage();
        case MSG_TYPE_DATE_CHANGE:
            return new DateChangeMessage();
        default:
            throw new MessageFormatException(ERR_INVALID_MESSAGE_TYPE, type);
    }
};

export {
    Message
};