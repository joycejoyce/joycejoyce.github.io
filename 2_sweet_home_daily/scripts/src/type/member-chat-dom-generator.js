function MemberChatDOMGenerator() {}
MemberChatDOMGenerator.generateMemberChatDOM = function(memberChatMsgObj) {
    let dom = document.createElement(HTML_TAG_NAME_DIV);
    dom.className = HTML_CLASS_MESSAGE;
    
    let memberIconDOM = MemberChatDOMGenerator.generateMemberIconDOM(memberChatMsgObj.memberIconSrc);
    let timestampDOM = MemberChatDOMGenerator.generateTimestampDOM(memberChatMsgObj.timestamp);
    let chatContentDOM = MemberChatDOMGenerator.generateChatContentDOM(memberChatMsgObj.chatContent);
    
    dom.appendChild(memberIconDOM);
    dom.appendChild(document.createTextNode(SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP));
    dom.appendChild(timestampDOM);
    dom.appendChild(document.createElement(HTML_TAG_NAME_BR));
    dom.appendChild(chatContentDOM);
    
    return dom;
};
MemberChatDOMGenerator.generateMemberIconDOM = function(memberIconSrc) {
    let dom = document.createElement(HTML_TAG_NAME_IMG);
    dom.className = HTML_CLASS_MEMBER_ICON;
    dom.src = memberIconSrc;
    return dom;
};
MemberChatDOMGenerator.generateTimestampDOM = function(timestamp) {
    let dom = document.createElement(HTML_TAG_NAME_SPAN);
    dom.className = HTML_CLASS_TIMESTAMP;
    dom.innerHTML = timestamp;
    return dom;
};
MemberChatDOMGenerator.generateChatContentDOM = function(chatContent) {
    let dom = document.createTextNode(chatContent);
    return dom;
};

export {
    MemberChatDOMGenerator
};