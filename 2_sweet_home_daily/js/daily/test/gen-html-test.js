import {
    DailyLINE,
    HtmlGenerator,
    MemberChatDOMGenerator
} from '../html-generator.js';
import {
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
    SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP
} from '../constants.js';

const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const { JSDOM } = require("jsdom");
const jsdom = new JSDOM('<!doctype html><html><body></body></html>');
const { window } = jsdom;
const $ = global.jQuery = require('jquery')(window);

const dateAndNum = "20200214-2";
const dailyLINE = new DailyLINE("20200214-2");
const memberChatMsgObj = dailyLINE.messageObjects[0];
const dateChangeMsgObj = dailyLINE.messageObjects[1];
const msgObjs = dailyLINE.messageObjects;
const oneImageMedia = dailyLINE.media;

const PROPERTY_TAG_NAME = "tagName";
const PROPERTY_INNER_HTML = "innerHTML";

beforeEach(function() {
    return JSDOM.fromFile("../../html/daily.html")
        .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
    });
});

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
        expect(dom.src).to.eql(memberChatMsgObj.memberIconSrc);
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
    it(`generate 'div' DOM with child nodes of memberChat/BR/BR/dateChange/BR/BR/memberChat`, function() {
        let dom = HtmlGenerator.generateTextPartOfChatDOM(msgObjs);
        checkTextPartOfChatDOM(dom);
        expect(dom.childNodes.length).to.eql(7);
        expect(dom.childNodes[0].className).to.eql(HTML_CLASS_MESSAGE);
        expect(dom.childNodes[1].tagName).to.eql(HTML_TAG_NAME_BR);
        expect(dom.childNodes[2].tagName).to.eql(HTML_TAG_NAME_BR);
        expect(dom.childNodes[3].className).to.eql(HTML_CLASS_DATE_CHANGE);
        expect(dom.childNodes[4].tagName).to.eql(HTML_TAG_NAME_BR);
        expect(dom.childNodes[5].tagName).to.eql(HTML_TAG_NAME_BR);
        expect(dom.childNodes[6].className).to.eql(HTML_CLASS_MESSAGE);
    })
});

describe(`generateMediaPartOfChatDOM(oneImageMedia)`, function() {
    it(`generate 'div' DOM with media contents: one image`, function() {
        let dom = HtmlGenerator.generateMediaPartOfChatDOM(oneImageMedia);
        checkMediaPartOfChatDOM(dom);
        
        let child = dom.childNodes[0];
        expect(child.tagName).to.eql(HTML_TAG_NAME_IMG);
        expect(child.id).to.eql(HTML_ID_MEDIA_PART);
        expect(child.src).to.eql(oneImageMedia.src[0]);
    })
});

describe(`generateChatDOM([mediaPartDOM, textPartDOM])`, function() {
    it(`generate 'div' DOM with media + texts of member chat`, function() {
        let mediaPartDOM = HtmlGenerator.generateMediaPartOfChatDOM(oneImageMedia);
        let textPartDOM = HtmlGenerator.generateTextPartOfChatDOM(msgObjs);
        
        let dom = HtmlGenerator.generateChatDOM([mediaPartDOM, textPartDOM]);
        expect(dom.tagName).to.eql(HTML_TAG_NAME_DIV);
        expect(dom.id).to.eql(HTML_ID_CHAT_CONTAINER);
        checkMediaPartOfChatDOM(dom.childNodes[0]);
        checkTextPartOfChatDOM(dom.childNodes[1]);
    })
});

describe(`generateTitleAndDatePartOfHeaderDOM([titleDOM, dateDOM])`, function() {
    it(`generate 'div' DOM of title + date`, function() {
        let titleDOM = HtmlGenerator.generateTitleDOM(dailyLINE.title);
        let dateDOM = HtmlGenerator.generateDateDOM(dailyLINE.date);
        
        let dom = HtmlGenerator.generateTitleAndDatePartOfHeaderDOM([titleDOM, dateDOM]);
        
        expect(dom.className).to.eql(HTML_CLASS_HEADER_ITEM);
        checkTitleDOM(dom.childNodes[0], dailyLINE.title);
        checkDateDOM(dom.childNodes[1], dailyLINE.date);
    })
});

/*describe(`generateHeaderDOM([headerItem])`, function() {
    it(`generate 'div' DOM of the header part`, function() {
        let titleDOM = HtmlGenerator.generateTitleDOM(dailyLINE.title);
        let dateDOM = HtmlGenerator.generateDateDOM(dailyLINE.date);
        let headerItem = HtmlGenerator.generateTitleAndDatePartOfHeaderDOM([titleDOM, dateDOM]);
        
        let dom = HtmlGenerator.generateHeaderDOM([headerItem]);
        expect(dom.id).to.eql(HTML_ID_HEADER_CONTAINER);
        
        
    })
});*/

function checkMemberChatDOM(dom, msgObj) {
    expect(dom.tagName).to.eql(HTML_TAG_NAME_DIV);
    expect(dom.className).to.eql(HTML_CLASS_MESSAGE);
    
    let memberIconNode = dom.getElementsByClassName(HTML_CLASS_MEMBER_ICON)[0];
    expect(memberIconNode.src).to.eql(msgObj.memberIconSrc);
    
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

function checkMediaPartOfChatDOM(dom) {
    expect(dom.tagName).to.eql(HTML_TAG_NAME_DIV);
    expect(dom.className).to.eql(HTML_CLASS_CHAT_ITEM);
}

function checkTitleDOM(dom, title) {
    checkDOMProperties(dom, {[PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV, [PROPERTY_INNER_HTML]: title});
}

function checkDateDOM(dom, date) {
    checkDOMProperties(dom, {[PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV, [PROPERTY_INNER_HTML]: date});
}

function checkDOMProperties(dom, propertiesToCheck) {
    let keys = Object.keys(propertiesToCheck);
    let values = Object.values(propertiesToCheck);
    keys.forEach((item, index) => {
        expect(dom[item]).to.eql(values[index]);
    });
}