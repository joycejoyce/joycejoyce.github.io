Object.entries(require('./common-func-for-tests.js')).forEach(([name, imported]) => global[name] = imported);

Object.entries(require('./test-gen-one-img-dom.js')).forEach(([name, imported]) => global[name] = imported);

const dateAndNum = "20200214-2";
const dailyLINE = new DailyLINE(dateAndNum);
const memberChatMsgObj = dailyLINE.messageObjects[0];
const dateChangeMsgObj = dailyLINE.messageObjects[1];
const msgObjs = dailyLINE.messageObjects;

beforeEach(loadHTML);

describe(`generateTitleDOM(${dailyLINE.title})`, function() {
    it(`generate 'div' DOM with innerHTML=${dailyLINE.title}`, function() {
        let dom = HtmlGenerator.generateTitleDOM(dailyLINE.title);
        checkTitleDOM(dom, dailyLINE.title);
    })
});

describe(`generateDateDOM(${dailyLINE.date})`, function() {
    it(`generate 'div' DOM with innerHTML=${dailyLINE.date}`, function() {
        let dom = HtmlGenerator.generateDateDOM(dailyLINE.date);
        checkDateDOM(dom, dailyLINE.date);
    })
});

describe(`generateTimestampDOM(${memberChatMsgObj.timestamp})`, function() {
    it(`generate 'span' DOM with innerHTML=${memberChatMsgObj.timestamp} & className=${HTML_CLASS_TIMESTAMP}`, function() {        
        let dom = MemberChatDOMGenerator.generateTimestampDOM(memberChatMsgObj.timestamp);
        expect(dom.tagName).to.eql(HTML_TAG_NAME_SPAN);
        expect(dom.innerHTML).to.eql(memberChatMsgObj.timestamp);
        expect(dom.className).to.eql(HTML_CLASS_TIMESTAMP);
    })
});

describe(`generateMemberIconDOM(${memberChatMsgObj.memberIconSrc})`, function() {
    it(`generate 'img' DOM with className=${HTML_CLASS_MEMBER_ICON} & src=${memberChatMsgObj.memberIconSrc}`, function() {
        let dom = MemberChatDOMGenerator.generateMemberIconDOM(memberChatMsgObj.memberIconSrc);
        expect(dom.tagName).to.eql(HTML_TAG_NAME_IMG);
        expect(dom.className).to.eql(HTML_CLASS_MEMBER_ICON);
        expect($(dom).attr(HTML_PROPERTY_SRC)).to.eql(memberChatMsgObj.memberIconSrc);
    })
});

describe(`generateChatContentDOM(${memberChatMsgObj.chatContent})`, function() {
    it(`generate a text DOM with textContent=${memberChatMsgObj.chatContent}`, function() {
        let dom = MemberChatDOMGenerator.generateChatContentDOM(memberChatMsgObj.chatContent);
        expect(dom.textContent).to.eql(memberChatMsgObj.chatContent);
    })
});

describe(`generateMemberChatDOM(memberChatMsgObj)`, function() {
    it(`generate 'div' DOM with className=${HTML_CLASS_MESSAGE} & DOMs of timestamp/memberIcon/br/chatContent`, function() {
        let dom = MemberChatDOMGenerator.generateMemberChatDOM(memberChatMsgObj);
        checkMemberChatDOM(dom, memberChatMsgObj);
    })
});

describe(`generateDateChangeDOM(dateChangeMsgObj)`, function() {
    it(`generate 'div' DOM with className=${HTML_CLASS_DATE_CHANGE} & innerHTML=${dateChangeMsgObj.dateChange}`, function() {
        let dom = HtmlGenerator.generateDateChangeDOM(dateChangeMsgObj);
        checkDateChangeDOM(dom, dateChangeMsgObj);
    })
});

describe(`generateMessageDOM(memberChatMsgObj)`, function() {
    it(`generate a MemberChatDOM`, function() {
        let dom = HtmlGenerator.generateMessageDOM(memberChatMsgObj);
        checkMemberChatDOM(dom, memberChatMsgObj);
    })
});

describe(`generateMessageDOM(dateChangeMsgObj)`, function() {
    it(`generate a DateChangeDOM`, function() {
        let dom = HtmlGenerator.generateMessageDOM(dateChangeMsgObj);
        checkDateChangeDOM(dom, dateChangeMsgObj);
    })
});

describe(`createBRElementsOfNum(2)`, function() {
    it(`generate 2 'br' DOMs`, function() {
        let dom = document.createElement(HTML_TAG_NAME_DIV);
        dom = HtmlGenerator.appendBRElementsOfNum(2, dom);
        expect(dom.getElementsByTagName(HTML_TAG_NAME_BR).length).to.eql(2);
    })
});

describe(`generateTextPartOfChatDOM(msgObjs)`, function() {
    it(`generate 'div' DOM with child nodes of memberChat/BR/dateChange/memberChat`, function() {
        let dom = HtmlGenerator.generateTextPartOfChatDOM(msgObjs);
        checkTextPartOfChatDOM(dom);
        expect(dom.childNodes.length).to.eql(4);
        expect(dom.childNodes[0].className).to.eql(HTML_CLASS_MESSAGE);
        expect(dom.childNodes[1].tagName).to.eql(HTML_TAG_NAME_BR);
        expect(dom.childNodes[2].className).to.eql(HTML_CLASS_DATE_CHANGE);
        expect(dom.childNodes[3].className).to.eql(HTML_CLASS_MESSAGE);
    })
});

describe(`generateChatDOM(oneImageMedia, msgObjs)`, function() {
    it(`generate 'div' DOM with media + texts of member chat`, function() {
        let dom = HtmlGenerator.generateChatDOM(oneImageMedia, msgObjs);
        
        checkChatDOM(dom, oneImageMedia.src);
    })
});

describe(`generateTitleAndDatePartOfHeaderDOM(title, date)`, function() {
    it(`generate 'div' DOM of title + date`, function() {
        let dom = HtmlGenerator.generateTitleAndDatePartOfHeaderDOM(dailyLINE.title, dailyLINE.date);
        
        checkTitleAndDatePartOfHeaderDOM(dom, dailyLINE.title, dailyLINE.date);
    })
});

describe(`generateHeaderDOM([title, date])`, function() {
    it(`generate 'div' DOM of the header part`, function() {
        let dom = HtmlGenerator.generateHeaderDOM(dailyLINE.title, dailyLINE.date);
        
        checkHeaderDOM(dom);
    })
});

describe(`generateMainDOM(dailyLINE)`, function() {
    it(`generate 'div' DOM with headerDOM & chatDOM`, function() {
        let dom = HtmlGenerator.generateMainDOM(dailyLINE);
        
        checkMainDOM(dom, dailyLINE.media.src);
    })
});

describe(`generateDailyHTML(${dateAndNum})`, function() {
    it(`append MainDOM to document.body`, function() {
        HtmlGenerator.generateDailyHTML(dateAndNum);
        let mediaSrc = new DailyLINE(dateAndNum).media.src;
        
        checkMainDOM(document.getElementById(HTML_ID_MAIN), mediaSrc);
    })
})

describe(`MemberChatMessage.appendBRElements(dom)`, function() {
    it(`append 1 BR element`, function() {
        let dom = document.createElement(HTML_TAG_NAME_DIV);
        let modifiedDOM = new MemberChatMessage().appendBRElements(dom);
        expect(modifiedDOM.childNodes.length).to.eql(1);
        expect(modifiedDOM.childNodes[0].tagName).to.eql(HTML_TAG_NAME_BR);
    })
});

describe(`DateChangeMessage.appendBRElements(dom)`, function() {
    it(`append 0 BR element`, function() {
        let dom = document.createElement(HTML_TAG_NAME_DIV);
        let modifiedDOM = new DateChangeMessage().appendBRElements(dom);
        expect(modifiedDOM.childNodes.length).to.eql(0);
    })
});

function checkMemberChatDOM(dom, msgObj) {
    expect(dom.tagName).to.eql(HTML_TAG_NAME_DIV);
    expect(dom.className).to.eql(HTML_CLASS_MESSAGE);
    
    let memberIconNode = dom.getElementsByClassName(HTML_CLASS_MEMBER_ICON)[0];
    expect($(memberIconNode).attr(HTML_PROPERTY_SRC)).to.eql(msgObj.memberIconSrc);
    
    expect(memberIconNode.nextSibling.textContent).to.eql(SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP);
    
    let timestampNode = dom.getElementsByClassName(HTML_CLASS_TIMESTAMP)[0];
    expect(timestampNode.innerHTML).to.eql(msgObj.timestamp);
    
    checkTagNameOfNextSibling(timestampNode, HTML_TAG_NAME_BR);
    
    expect(dom.lastChild.textContent).to.eql(memberChatMsgObj.chatContent);
}

function checkTagNameOfNextSibling(dom, tagName) {
    expect(dom.nextSibling.tagName).to.eql(tagName);
}

function checkTagNameOfPreviousSibling(dom, tagName) {
    expect(dom.previousSibling.tagName).to.eql(tagName);
}

function checkDateChangeDOM(dom, msgObj) {
    expect(dom.tagName).to.eql(HTML_TAG_NAME_DIV);
    expect(dom.className).to.eql(HTML_CLASS_DATE_CHANGE);
    expect(dom.innerHTML).to.eql(msgObj.dateChange);
}

function checkTextPartOfChatDOM(dom) {
    expect(dom.tagName).to.eql(HTML_TAG_NAME_DIV);
    expect(dom.id).to.eql(HTML_ID_TEXT_PART);
    expect(dom.className).to.eql(HTML_CLASS_CHAT_ITEM);
}

function checkChatDOM(dom, mediaSrc) {
    expect(dom.tagName).to.eql(HTML_TAG_NAME_DIV);
    expect(dom.id).to.eql(HTML_ID_CHAT_CONTAINER);
    checkOneImageMediaDOM(dom.childNodes[0], mediaSrc);
    checkTextPartOfChatDOM(dom.childNodes[1]);
}

function checkTitleDOM(dom, title) {
    checkDOMProperties(dom, {[HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV, [HTML_PROPERTY_INNER_HTML]: title});
}

function checkDateDOM(dom, date) {
    checkDOMProperties(dom, {[HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV, [HTML_PROPERTY_INNER_HTML]: date});
}

function checkTitleAndDatePartOfHeaderDOM(dom, title, date) {
    expect(dom.className).to.eql(HTML_CLASS_HEADER_ITEM);
    checkTitleDOM(dom.childNodes[0], title);
    checkDateDOM(dom.childNodes[1], date);
}

function checkHeaderDOM(dom) {
    expect(dom.id).to.eql(HTML_ID_HEADER_CONTAINER);
    expect(dom.childNodes.length).to.eql(1);
    checkTitleAndDatePartOfHeaderDOM(dom.childNodes[0], dailyLINE.title, dailyLINE.date);
}

function checkMainDOM(dom, mediaSrc) {
    expect(dom.id).to.eql(HTML_ID_MAIN);
    expect(dom.childNodes.length).to.eql(2);
    checkHeaderDOM(dom.childNodes[0]);
    checkChatDOM(dom.childNodes[1], mediaSrc);
}