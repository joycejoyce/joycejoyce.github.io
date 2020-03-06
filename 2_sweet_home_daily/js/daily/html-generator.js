import {REGEXP_DATE_AND_NUM_DELIMITER,
       REGEXP_LINE_MSG_PREFIX_ALL,
       REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT,
       REGEXP_LINE_MSG_PREFIX_DATE_CHANGE,
       REGEXP_LINE_MEMBER_NAME,
       REGEXP_LINE_TIMESTAMP,
       REGEXP_LINE_DATE_CHANGE_DELIMITER}
from './regexp.js';
import {
    RESOURCE_FILES_LOCATION,
    MEMBER_ICON_LOCATION,
    MEMBER_NAME_MAPPING,
    MEMBER_ICON_EXTENTION,
    DAILY_TITLE,
    DAILY_MESSAGE,
    DAILY_MEDIA_TYPE,
    DAILY_MEDIA_SOURCE
} from './line-constants.js';
import {
    MSG_TYPE_MEMBER_CHAT,
    MSG_TYPE_DATE_CHANGE,
    MONTH_NAME,
    ERR_INVALID_MESSAGE_PREFIX,
    HTML_ID_TITLE,
    HTML_ID_DATE,
    HTML_ID_TEXT_PART,
    HTML_ID_MEDIA_PART,
    HTML_ID_CHAT_CONTAINER,
    HTML_ID_HEADER_CONTAINER,
    HTML_CLASS_TIMESTAMP,
    HTML_CLASS_MEMBER_ICON,
    HTML_CLASS_MESSAGE,
    HTML_CLASS_DATE_CHANGE,
    HTML_CLASS_CHAT_ITEM,
    HTML_CLASS_HEADER_ITEM,
    HTML_TAG_NAME_SPAN,
    HTML_TAG_NAME_IMG,
    HTML_TAG_NAME_DIV,
    HTML_TAG_NAME_BR,
    HTML_PROPERTY_TAG_NAME,
    HTML_PROPERTY_ID,
    HTML_PROPERTY_CLASS_NAME,
    SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP
} from './constants.js';
import {
    Check,
    Assert
} from './tool.js';
import {
    MessageFormatException
} from './exception.js';

function DailyLINE(dateAndNum) {
    //public:
    this.title = getTitle();
    this.date = getDate();
    this.messageObjects = getMessageObjects();
    this.media = getMedia();
    
    function getTitle() {
        return DAILY_TITLE[dateAndNum];
    }
    
    function getDate() {
        let timeFormatter = new TimeFormatter(DateAndNumParser.getDate(dateAndNum));
        return timeFormatter.getDateOfDailyLINE();
    }
    
    function getMessageObjects() {
        let wholeMsgStr = DAILY_MESSAGE[dateAndNum];
        let messageParser = new MessageParser(wholeMsgStr);
        return messageParser.messageObjects;
    }
    
    function getMedia() {
        return new Media(dateAndNum);
    }
}

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

function MemberChatMessage() {
    //prefix = "22:55 victor"
    //content = "小螞蟻玩水玩得好高興!!"

    this.setProperties = function(prefix, content) {
        this.memberIconSrc = getMemberIconSrc(prefix);
        this.timestamp = getTimestamp(prefix);
        this.chatContent = getChatConent(content);
        return this;
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
}

function Member() {}
Member.getMemberIconSrc = function(memberName) {
    return MEMBER_ICON_LOCATION + MEMBER_NAME_MAPPING[memberName] + MEMBER_ICON_EXTENTION;
};

function DateChangeMessage() {
    //prefix = "2020.02.18"
    //content = "星期二"
    
    this.setProperties = function(prefix, content) {
        this.dateChange = getDateChange(prefix);
        return this;
    };
    
    this.generateMessageDOM = function(msgObj) {
        return HtmlGenerator.generateDateChangeDOM(msgObj);
    };
    
    function getDateChange(prefix) {
        return prefix.match(REGEXP_LINE_MSG_PREFIX_DATE_CHANGE)[0].split(REGEXP_LINE_DATE_CHANGE_DELIMITER).join('/');
    }
}

function Media(dateAndNum) {
    //public:
    this.type = DAILY_MEDIA_TYPE[dateAndNum];
    this.src = Media.getSrcFilePaths(dateAndNum);
}
Media.getSrcFolder = function(dateAndNum) {
    const date = DateAndNumParser.getDate(dateAndNum);
    const num = DateAndNumParser.getNum(dateAndNum);
    let timeFormatter = new TimeFormatter(date);
    
    let srcFolder = RESOURCE_FILES_LOCATION + "/" + timeFormatter.year + "/" + timeFormatter.month + "/" + timeFormatter.day + "/" + num;
    
    return srcFolder;
};
Media.getSrcFilePaths = function(dateAndNum) {
    return DAILY_MEDIA_SOURCE[dateAndNum].map(
        item => Media.getSrcFolder(dateAndNum) + "/" + item
    );
};

function HtmlGenerator() {}
HtmlGenerator.generateTitleDOM = function(title) {
    let dom = document.createElement(HTML_TAG_NAME_DIV);
    dom.id = HTML_ID_TITLE;
    dom.innerHTML = title;
    return dom;
};
HtmlGenerator.generateDateDOM = function(date) {
    let dom = document.createElement(HTML_TAG_NAME_DIV);
    dom.id = HTML_ID_DATE;
    dom.innerHTML = date;
    return dom;
};
HtmlGenerator.generateDateChangeDOM = function(dateChangeMsgObj) {
    let dom = document.createElement(HTML_TAG_NAME_DIV);
    dom.className = HTML_CLASS_DATE_CHANGE;
    dom.innerHTML = dateChangeMsgObj.dateChange;
    return dom;
};
HtmlGenerator.generateMessageDOM = function(msgObj) {
    return msgObj.generateMessageDOM(msgObj);
};
HtmlGenerator.appendBRElementsOfNum = function(num, parentDOM) {
    let dom = parentDOM;
    for(let i=0; i<num; i++) {
        dom.appendChild(document.createElement(HTML_TAG_NAME_BR));
    }
    return dom;
};
HtmlGenerator.generateTextPartOfChatDOM = function(msgObjs) {
    let dom = document.createElement(HTML_TAG_NAME_DIV);
    dom.id = HTML_ID_TEXT_PART;
    dom.className = HTML_CLASS_CHAT_ITEM;
    
    let msgObjDOMs = msgObjs.map(item => item.generateMessageDOM(item));
    dom = msgObjDOMs.reduce((origDOM, item, index) => {
            if(index > 0) {
                origDOM = HtmlGenerator.appendBRElementsOfNum(2, origDOM);
            }
            origDOM.appendChild(item);
            return origDOM;
        }, dom);
    return dom;
};
HtmlGenerator.generateMediaPartOfChatDOM = function(oneImageMedia) {
    let dom = document.createElement(HTML_TAG_NAME_DIV);
    dom.className = HTML_CLASS_CHAT_ITEM;
    
    let child = document.createElement(HTML_TAG_NAME_IMG);
    child.id = HTML_ID_MEDIA_PART;
    child.src = oneImageMedia.src[0];
    
    dom.appendChild(child);
    
    return dom;
};
HtmlGenerator.generateChatDOM = function(children) {
    //return HtmlGenerator.generateDOMWithChildren(HTML_TAG_NAME_DIV, HTML_ID_CHAT_CONTAINER, children);
    return HtmlGenerator.new_generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_CHAT_CONTAINER
        },
        children
    );
};
HtmlGenerator.generateTitleAndDatePartOfHeaderDOM = function(children) {
    //return HtmlGenerator.generateDOMWithChildren(HTML_TAG_NAME_DIV, HTML_ID_HEADER_CONTAINER, children);
    return HtmlGenerator.new_generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_HEADER_ITEM
        },
        children
    );
};
HtmlGenerator.generateDOMWithChildren = function(tagName, id, children) {
    let dom = document.createElement(tagName);
    dom.id = id;
    children.forEach(child => dom.appendChild(child));
    return dom;
};
HtmlGenerator.new_generateDOMWithChildren = function(domProperties, children) {
    let dom = document.createElement(domProperties[HTML_PROPERTY_TAG_NAME]);
    
    let keys = Object.keys(domProperties);
    keys
        .filter(item => item != HTML_PROPERTY_TAG_NAME)
        .forEach(item => dom[item] = domProperties[item]);
    
    children.forEach(child => dom.appendChild(child));
    
    return dom;
};

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

function TimeFormatter(date) {
    this.year = getYear();
    this.month = getMonth();
    this.day = getDay();
    
    function getYear() {
        return date.substr(0, 4);
    }
    
    function getMonth() {
        return date.substr(4, 2);
    }
    
    function getDay() {
        return date.substr(6, 2);
    }
}
TimeFormatter.prototype = {
    constructor: TimeFormatter,
    getDateOfDailyLINE: function() {
        return TimeFormatter.getShortMonthName(this.month) + " " + this.day + ", " + this.year;
    },
    getDateOfAllNumber: function() {
        return this.year + this.month + this.day;
    }
};
TimeFormatter.getMonthName = function(month) {
    let index = parseInt(month, 10) - 1;
    return MONTH_NAME[index];
};
TimeFormatter.getShortMonthName = function(month) {
    return this.getMonthName(month).substr(0, 3);
};

function DateAndNumParser(dateAndNum) {}
DateAndNumParser.getDate = function(dateAndNum) {
    return dateAndNum.split(REGEXP_DATE_AND_NUM_DELIMITER)[0];
};
DateAndNumParser.getNum = function(dateAndNum) {
    return dateAndNum.split(REGEXP_DATE_AND_NUM_DELIMITER)[1];
}

function generateDailyHTML(dateAndNum) {
    let dailyLINE = new DailyLINE(dateAndNum);
    console.log(dailyLINE);
    
    /*$.when(
        $.getScript("../js/daily/constants.js"),
        $.getScript("../js/daily/exception.js"),
        $.getScript("../js/daily/line-constants.js"),
        $.getScript("../js/daily/regexp.js"),
        $.getScript("../js/daily/tool.js"),
        $.Deferred(function(deferred) {
            $(deferred.resolve);
        })
    ).done(function(){
        let dailyLINE = new DailyLINE(dateAndNum);
        console.log(dailyLINE);
    });*/
}

export {
    DateAndNumParser,
    Media,
    DailyLINE,
    HtmlGenerator,
    MemberChatDOMGenerator,
    generateDailyHTML
};