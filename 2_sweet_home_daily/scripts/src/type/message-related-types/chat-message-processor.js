import {HTML_CLASS, HTML_TAG_NAME, HTML_PROPERTY} from "../../constant/html-properties.js";
import {HtmlGenerator} from "../html-generator.js";
import {RegexpUtil} from "../util/regexp-util.js";

const ALIAS_TO_MEMBER = { //alias: member
    "許天亮": "frank",
    "frank": "frank",
    "amy": "amy",
    "美燕": "amy",
    "victor": "victor",
    "dorith1989": "dorith",
    "jim": "jim",
    "阿羊": "jim"
};
const ALIASES_REGEXP = new RegExp(Object.keys(ALIAS_TO_MEMBER).join('|'));
const TIMESTAMP_REGEXP = new RegExp("\\d{2}:\\d{2}");

function ChatMessageProcessor(prefix, content) {
    //message contents (start)
    const MEMBER_ICON_SRC = getMemberIconSrc(prefix);
    const TIMESTAMP = getTimestamp(prefix);
    const CHAT_CONTENT = content;
    //message contents (end)
    
    function getMemberIconSrc(prefix) {
        const member = getMember(prefix);
        const memberIconFileName = getMemberIconFileName(member);
        const memberIconLocation = "./images/member_icon/";
        return memberIconLocation + memberIconFileName;
    }
    
    function getMember(prefix) {
        const aliasOfPrefix = prefix.match(ALIASES_REGEXP)[0];
        const memberOfPrefix = ALIAS_TO_MEMBER[aliasOfPrefix];
        return memberOfPrefix;
    }
    
    function getMemberIconFileName(member) {
        return member + ".png";
    }
    
    function getTimestamp(prefix) {
        return prefix.match(TIMESTAMP_REGEXP)[0];
    }
    
    function getMessage() {
        return {
            memberIconSrc: MEMBER_ICON_SRC,
            timestamp: TIMESTAMP,
            chatContent: CHAT_CONTENT
        };
    }
    
    this.getDom = function() {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
                [HTML_PROPERTY.className]: HTML_CLASS.message
            },
            getChildDoms()
        );
        //console.log(dom.outerHTML);
        return dom;
    };
    
    function getChildDoms() {
        let memberIconDom = getMemberIconDom();
        let spaceDom = getSpaceDom();
        let timestampDom = getTimestampDom();
        let chatContentDom = getChatContentDom();
        return [memberIconDom,
               spaceDom,
               timestampDom,
               document.createElement(HTML_TAG_NAME.br),
               chatContentDom];
    }
    
    function getMemberIconDom() {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.img,
                [HTML_PROPERTY.className]: HTML_CLASS.memberIcon,
                [HTML_PROPERTY.src]: MEMBER_ICON_SRC
            },
            []
        );
        return dom;
    }
    
    function getSpaceDom() {
        return document.createTextNode("  ");
    }
    
    function getTimestampDom() {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.span,
                [HTML_PROPERTY.className]: HTML_CLASS.timestamp,
                [HTML_PROPERTY.textContent]: TIMESTAMP
            },
            []
        );
        return dom;
    }
    
    function getChatContentDom() {
        return document.createTextNode(CHAT_CONTENT);
    }
}

ChatMessageProcessor.getMessagePrefixRegexp = function() {
    const regexpsOfTimestampAndEachAlias = Object.keys(ALIAS_TO_MEMBER)
            .map(item => TIMESTAMP_REGEXP.source + "\\s" + item)
            .join('|');
    return new RegExp(regexpsOfTimestampAndEachAlias);
};

export {
    ChatMessageProcessor
};