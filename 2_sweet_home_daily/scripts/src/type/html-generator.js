import {HTML_TAG_NAME, HTML_PROPERTY, HTML_CLASS, HTML_ID} from "../constant/html-properties.js";
import {ChatMessageProcessor} from "./message-related-types/chat-message-processor.js";
import {DateChangeMessageProcessor} from "./message-related-types/date-change-message-processor.js";
//import {MediaProcessor} from "./media-related-types/media-processor.js";

const BR = HTML_TAG_NAME.br;
const TAG_NAME = HTML_PROPERTY.tagName;
const CLASS_NAME = HTML_PROPERTY.className;
const TEXT_CONTENT = HTML_PROPERTY.textContent;

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
HtmlGenerator.generateTextPartOfChatDOM = function(msgProcessors) {
    let msgDoms = msgProcessors.map(item => item.getDom());
    let dom = HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
            [HTML_PROPERTY.id]: HTML_ID.textPart,
            [HTML_PROPERTY.className]: HTML_CLASS.chatItem
        },
        []
    );
    dom = msgDoms.reduce((origDOM, msgDom, index) => {
            if(index > 0) {
                HtmlGenerator.appendBRElementsOfNum(1, origDOM);
            }
            origDOM.appendChild(msgDom);
            return origDOM;
        }, dom);
    
    return dom;
};
HtmlGenerator.generateMediaPartOfChatDOM = function(mediaProcessor) {
   return mediaProcessor.getDom();
};
HtmlGenerator.generateChatDOM = function(mediaProcessor, msgProcessors) {
    let mediaPartDOM = HtmlGenerator.generateMediaPartOfChatDOM(mediaProcessor);
    let textPartDOM = HtmlGenerator.generateTextPartOfChatDOM(msgProcessors);
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_CHAT_CONTAINER
        },
        [mediaPartDOM, textPartDOM]
    );
};
HtmlGenerator.generateTitleAndDatePartOfHeaderDOM = function(title, date) {
    let titleDOM = HtmlGenerator.generateTitleDOM(title);
    let dateDOM = HtmlGenerator.generateDateDOM(date);
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_HEADER_ITEM
        },
        [titleDOM, dateDOM]
    );
};
HtmlGenerator.generateHeaderDOM = function(title, date) {
    let titleAndDateDOM = HtmlGenerator.generateTitleAndDatePartOfHeaderDOM(title, date);
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_HEADER_CONTAINER
        },
        [titleAndDateDOM]
    );
}
HtmlGenerator.generateMainDOM = function(dailyLINE) {
    let headerDOM = HtmlGenerator.generateHeaderDOM(dailyLINE.title, dailyLINE.date);
    let chatDOM = HtmlGenerator.generateChatDOM(dailyLINE.getMediaProcessor(), dailyLINE.getMessageProcessors());
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_MAIN
        },
        [headerDOM, chatDOM]
    );
};
HtmlGenerator.generateDOMWithChildren = function(domProperties, children) {
    let dom = document.createElement(domProperties[HTML_PROPERTY.tagName]);
    
    let keys = Object.keys(domProperties);
    keys.filter(item => item != TAG_NAME)
        .forEach(item => dom[item] = domProperties[item]);
    
    children.forEach(child => dom.appendChild(child));
    
    return dom;
};
HtmlGenerator.generateDailyHTML = function(dateAndNum) {
    const import_files = require('../tool/import-files.js');
    import_files.doImport(import_files.IMPORT_TYPE_ES6);
    let dailyLINE = new DailyLINE(dateAndNum);
    let dom = HtmlGenerator.generateMainDOM(dailyLINE);
    document.body.appendChild(dom);
};

export {
    HtmlGenerator
};