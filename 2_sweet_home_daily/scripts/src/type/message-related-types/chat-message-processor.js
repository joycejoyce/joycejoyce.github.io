import {HTML_CLASS, HTML_TAG_NAME, HTML_PROPERTY} from "../../constant/html-properties.js";
import {HtmlGenerator} from "../html-generator.js";

const MESSAGE = HTML_CLASS.message;
const CLASS_TIMESTAMP = HTML_CLASS.timestamp; //distinguish with ChatMessageProcessor's private member TIMESTAMP
const MEMBER_ICON = HTML_CLASS.member_icon;
const DIV = HTML_TAG_NAME.div;
const IMG = HTML_TAG_NAME.img;
const SPAN = HTML_TAG_NAME.span;
const BR = HTML_TAG_NAME.br;
const TAG_NAME = HTML_PROPERTY.tagName;
const CLASS_NAME = HTML_PROPERTY.className;
const INNER_HTML = HTML_PROPERTY.innerHTML;
const SRC = HTML_PROPERTY.src;
const TEXT_CONTENT = HTML_PROPERTY.textContent;

function ChatMessageProcessor(prefix, content) {
    const MEMBER_ICON_LOCATION = "./images/member_icon/";
    const MEMBER_NAME_TO_ICON_FILE_NAME = {
        許天亮: "frank",
        amy: "amy",
        美燕: "amy",
        victor: "victor",
        dorith1989: "dorith",
        jim: "jim",
        阿羊: "jim"
    };
    const MEMBER_ICON_EXTENTION = ".png";
    const HTML_CLASS = {
        member_icon: "member_icon"
    };
    const REGEXP_LINE_MEMBER_NAME = (function() {
        return new RegExp(Object.keys(MEMBER_NAME_TO_ICON_FILE_NAME).join("|"));
    })();
    const REGEXP_LINE_TIMESTAMP = (function() {
        return new RegExp('\\d{2}:\\d{2}');
    })();
    
    const MEMBER_ICON_SRC = getMemberIconSrc(prefix);
    const TIMESTAMP = getTimestamp(prefix);
    const CHAT_CONTENT = content;
    
    this.getMessage = function() {
        return {
            memberIconSrc: MEMBER_ICON_SRC,
            timestamp: TIMESTAMP,
            chatContent: CHAT_CONTENT
        }
    };
        
    function getMemberIconSrc(prefix) {
        let memberName = getMemberName(prefix);
        return MEMBER_ICON_LOCATION + 
            MEMBER_NAME_TO_ICON_FILE_NAME[memberName] + 
            MEMBER_ICON_EXTENTION;
    }
    
    function getMemberName(prefix) {
        return prefix.match(REGEXP_LINE_MEMBER_NAME)[0];
    }
    
    function getTimestamp(prefix) {
        return prefix.match(REGEXP_LINE_TIMESTAMP)[0];
    }
    
    this.getDom = function() {
        let dom = HtmlGenerator.generateDOMWithChildren(
            {
                [TAG_NAME]: DIV,
                [CLASS_NAME]: MESSAGE
            },
            getChildDoms()
        );
        //console.log(dom.outerHTML);
        return dom;
    };
    
    function getChildDoms() {
        let memberIconDom = getMemberIconDom();
        let twoSpaceDom = getTwoSpaceDom();
        let timestampDom = getTimestampDom();
        let chatContentDom = getChatContentDom();
        return [memberIconDom,
               twoSpaceDom,
               timestampDom,
               HtmlGenerator.getBRDom(),
               chatContentDom];
    }
    
    function getMemberIconDom() {
        let dom = HtmlGenerator.generateDOMWithChildren(
            {
                [TAG_NAME]: IMG,
                [CLASS_NAME]: MEMBER_ICON,
                [SRC]: MEMBER_ICON_SRC
            },
            []
        );
        return dom;
    }
    
    function getTwoSpaceDom() {
        return document.createTextNode("  ");
    }
    
    function getTimestampDom() {
        let dom = HtmlGenerator.generateDOMWithChildren(
            {
                [TAG_NAME]: SPAN,
                [CLASS_NAME]: CLASS_TIMESTAMP,
                [TEXT_CONTENT]: TIMESTAMP
            },
            []
        );
        return dom;
    }
    
    function getChatContentDom() {
        return document.createTextNode(CHAT_CONTENT);
    }
}

export {
    ChatMessageProcessor
};