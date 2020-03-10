function MemberChatMessage() {
    //prefix = "22:55 victor"
    //content = "小螞蟻玩水玩得好高興!!"

    this.setProperties = function(prefix, content) {
        this.memberIconSrc = getMemberIconSrc(prefix);
        this.timestamp = getTimestamp(prefix);
        this.chatContent = getChatConent(content);
        this.type = MSG_TYPE_MEMBER_CHAT;
        return this;
    };
    
    this.appendBRElements = function(dom) {
        return HtmlGenerator.appendBRElementsOfNum(1, dom);
    };
    
    this.generateMessageDOM = function(msgObj) {
        return MemberChatDOMGenerator.generateMemberChatDOM(msgObj);
    };
    
    function getMemberIconSrc(prefix) {
        let memberName = getMemberName(prefix);
        return Member.getMemberIconSrc(memberName);
    }
    
    function getMemberName(prefix) {
        return prefix.match(REGEXP_LINE_MEMBER_NAME)[0];
    }
    
    function getTimestamp(prefix) {
        return prefix.match(REGEXP_LINE_TIMESTAMP)[0];
    }
    
    function getChatConent(content) {
        return content;
    }
};

export {
    MemberChatMessage
};