function MessageParser(wholeMsgStr) {
    this.messageObjects = getMessageObjects();
    
    function getMessageObjects() {
        let msgPrefixes = getMsgPrefixes();
        let msgContents = getMsgContents();
        Assert.isTrue(Check.lengthesEqual(msgPrefixes, msgContents));
        
        let msgTypes = getMsgTypes(msgPrefixes);
        let messageObjects = createMessageObjects(msgTypes);
        setPropertiesOfMessageObjects(messageObjects, msgPrefixes, msgContents);
        //console.log(messageObjects);
        
        return messageObjects;
    }
    
    function getMsgPrefixes() {
        return wholeMsgStr.match(REGEXP_LINE_MSG_PREFIX_ALL);
    }
    
    function getMsgContents() {
        return wholeMsgStr.split(REGEXP_LINE_MSG_PREFIX_ALL).filter(x => x).map(x => x.trim());
    }
    
    function getMsgTypes(msgPrefixes) {
        try {
            return msgPrefixes.map(
                item => MessageParser.getMsgTypeByPrefix(item)
            );
        } catch(e) {
            console.log(e);
        }
    }
    
    function setMsgTypes(messages, msgTypes) {
        const getMsgTypeObjFunc = function(msgType) {
            if(msgType === MSG_TYPE_MEMBER_CHAT) {
                return new MemberChatMessage();
            }
            else if(msgType === MSG_TYPE_DATE_CHANGE) {
                message.setMsgTypeObj(new DateChangeMessage(msgPrefixes[i], msgContents[i]));
            }
        };
        
        messages.forEach(
            item => item.setMsgTypeObj()
        );
    }
    
    function createMessageObjects(msgTypes) {
        return msgTypes.map(
            item => Message.create(item)
        );
    }
    
    function setPropertiesOfMessageObjects(messageObjects, msgPrefixes, msgContents) {
        messageObjects.forEach(
            (item, i) => item.setProperties(msgPrefixes[i], msgContents[i])
        );
    }
}
MessageParser.getMsgTypeByPrefix = function(prefix) {
    REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.lastIndex = 0;
    REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.lastIndex = 0;
    
    if(REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.test(prefix)) {
        return MSG_TYPE_MEMBER_CHAT;
    }
    
    if(REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.test(prefix)) {
        return MSG_TYPE_DATE_CHANGE;
    }
    
    throw new MessageFormatException(ERR_INVALID_MESSAGE_PREFIX, prefix);
};

export {
    MessageParser
};