import {HTML_TAG_NAME, HTML_PROPERTY, HTML_CLASS, HTML_ID} from "../constant/html-properties.js";
import {ChatMessageProcessor} from "./message-related-types/chat-message-processor.js";
import {DateChangeMessageProcessor} from "./message-related-types/date-change-message-processor.js";

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
HtmlGenerator.generateMediaPartOfChatDOM = function(media) {
   return media.generateMediaDOM();
};
HtmlGenerator.generateOneImageMediaDOM = function(mediaSrc) {
    let dom = document.createElement(HTML_TAG_NAME_IMG);
    dom.id = HTML_ID_ONE_IMG_MEDIA_PART;
    dom.className = HTML_CLASS_CHAT_ITEM;
    dom.src = mediaSrc;
    return dom;
};
HtmlGenerator.generateMultiImageMediaDOM = function(mediaSrc) {
    let multiShrinkImgDOM = HtmlGenerator.generateMultiShrinkImgDOM(mediaSrc);
    let expandImgDOM = HtmlGenerator.generateExpandImgDOM(mediaSrc[0]);

    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_MULTI_IMG_MEDIA_PART,
            [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_CHAT_ITEM
        },
        [multiShrinkImgDOM, expandImgDOM]
    );
};
HtmlGenerator.generateChatDOM = function(media, msgProcessors) {
    let mediaPartDOM = HtmlGenerator.generateMediaPartOfChatDOM(media);
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
    let chatDOM = HtmlGenerator.generateChatDOM(dailyLINE.media, dailyLINE.getMessageProcessors());
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_MAIN
        },
        [headerDOM, chatDOM]
    );
};
HtmlGenerator.generateShrinkImgDOM = function(imgSrc) {
    let dom = document.createElement(HTML_TAG_NAME_IMG);
    dom.className = HTML_CLASS_SHRINK_IMG;
    dom.src = imgSrc;
    return dom;
};
HtmlGenerator.generateMultiShrinkImgDOM = function(imgSrcAry) {
    let dom = document.createElement(HTML_TAG_NAME_DIV);
    let children = imgSrcAry.map(item => HtmlGenerator.generateShrinkImgDOM(item));
    $(children[0]).addClass(HTML_CLASS_CURRENT_IMG);
    
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_SHRINK_IMGS
        },
        children
    );
};
HtmlGenerator.generateExpandImgDOM = function(imgSrc) {
    let dom = document.createElement(HTML_TAG_NAME_IMG);
    dom.id = HTML_ID_EXPAND_IMG;
    dom.src = imgSrc;
    dom[HTML_PROPERTY_DATA_VALUE] = imgSrc;
    return dom;
};
HtmlGenerator.generateVideoSourceDOM = function(videoSrc) {
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_SOURCE,
            [HTML_PROPERTY_SRC]: videoSrc,
            [HTML_PROPERTY_TYPE]: OneVideoMedia.getVideoFormat(Media.getFileName(videoSrc))
        },
        []
    );
};
HtmlGenerator.generateVideoDOM = function(videoSrc) {
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_VIDEO,
            [HTML_PROPERTY_CONTROLS]: true
        },
        [HtmlGenerator.generateVideoSourceDOM(videoSrc)]
    );
};
HtmlGenerator.generateOneVideoMediaDOM = function(videoSrc) {
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_ONE_VIDEO_MEDIA_PART,
            [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_CHAT_ITEM
        },
        [HtmlGenerator.generateVideoDOM(videoSrc)]
    );
};
HtmlGenerator.generateDOMWithChildren = function(domProperties, children) {
    let dom = document.createElement(domProperties[TAG_NAME]);
    
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
    
    dailyLINE.media.addEventListeners();
};
HtmlGenerator.getBRDom = function() {
    return document.createElement(BR);
};

export {
    HtmlGenerator
};