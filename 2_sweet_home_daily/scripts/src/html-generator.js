import {HTML_TAG_NAME, HTML_PROPERTY, HTML_CLASS, HTML_ID} from "./html-properties.js";
import {DailyLINE} from "./daily-line.js";

function HtmlGenerator() {}
HtmlGenerator.generateTitleDOM = function(title) {
    let dom = document.createElement(HTML_TAG_NAME.div);
    dom.id = HTML_ID.title;
    dom.innerHTML = title;
    return dom;
};
HtmlGenerator.generateDateDOM = function(date) {
    let dom = document.createElement(HTML_TAG_NAME.div);
    dom.id = HTML_ID.date;
    dom.innerHTML = date;
    return dom;
};
HtmlGenerator.generateMessageDOM = function(msgObj) {
    return msgObj.generateMessageDOM(msgObj);
};
HtmlGenerator.appendBRElementsOfNum = function(num, parentDOM) {
    let dom = parentDOM;
    for(let i=0; i<num; i++) {
        dom.appendChild(document.createElement(HTML_TAG_NAME.br));
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
            [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
            [HTML_PROPERTY.id]: HTML_ID.chatContainer
        },
        [mediaPartDOM, textPartDOM]
    );
};
HtmlGenerator.generateTitleAndDatePartOfHeaderDOM = function(title, date) {
    let titleDOM = HtmlGenerator.generateTitleDOM(title);
    let dateDOM = HtmlGenerator.generateDateDOM(date);
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
            [HTML_PROPERTY.className]: HTML_CLASS.headerItem
        },
        [titleDOM, dateDOM]
    );
};
HtmlGenerator.generateHeaderDOM = function(title, date) {
    let titleAndDateDOM = HtmlGenerator.generateTitleAndDatePartOfHeaderDOM(title, date);
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
            [HTML_PROPERTY.id]: HTML_ID.headerContainer
        },
        [titleAndDateDOM]
    );
}
HtmlGenerator.generateMainDOM = function(dailyLINE) {
    let headerDOM = HtmlGenerator.generateHeaderDOM(dailyLINE.title, dailyLINE.date);
    let chatDOM = HtmlGenerator.generateChatDOM(dailyLINE.getMediaProcessor(), dailyLINE.getMessageProcessors());
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
            [HTML_PROPERTY.id]: HTML_ID.main
        },
        [headerDOM, chatDOM]
    );
};
HtmlGenerator.generateDOMWithChildren = function(domProperties, children) {
    let dom = document.createElement(domProperties[HTML_PROPERTY.tagName]);
    
    let keys = Object.keys(domProperties);
    keys.filter(item => item != HTML_PROPERTY.tagName)
        .forEach(item => dom[item] = domProperties[item]);
    
    children.forEach(child => dom.appendChild(child));
    
    return dom;
};
HtmlGenerator.generateDailyHTML = function(dateAndNum) {
    let dailyLINE = new DailyLINE(dateAndNum);
    let dom = HtmlGenerator.generateMainDOM(dailyLINE);
    document.body.appendChild(dom);
};

export {
    HtmlGenerator
};