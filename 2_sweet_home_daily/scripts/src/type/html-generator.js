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
            origDOM.appendChild(item);
            if(isNotLastItem(index, msgObjDOMs.length)) {
                origDOM = msgObjs[index].appendBRElements(origDOM);
            }
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
    
    let dom = HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_MULTI_IMG_MEDIA_PART,
            [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_CHAT_ITEM
        },
        [multiShrinkImgDOM, expandImgDOM]
    );
    console.log("dom = " + dom.outerHTML);
    return HtmlGenerator.generateDOMWithChildren(
        {
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_MULTI_IMG_MEDIA_PART,
            [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_CHAT_ITEM
        },
        [multiShrinkImgDOM, expandImgDOM]
    );
};
HtmlGenerator.generateChatDOM = function(media, msgObjs) {
    let mediaPartDOM = HtmlGenerator.generateMediaPartOfChatDOM(media);
    let textPartDOM = HtmlGenerator.generateTextPartOfChatDOM(msgObjs);
    
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
    let chatDOM = HtmlGenerator.generateChatDOM(dailyLINE.media, dailyLINE.messageObjects);
    
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
HtmlGenerator.generateDOMWithChildren = function(domProperties, children) {
    let dom = document.createElement(domProperties[HTML_PROPERTY_TAG_NAME]);
    
    let keys = Object.keys(domProperties);
    keys
        .filter(item => item != HTML_PROPERTY_TAG_NAME)
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

function isNotLastItem(index, length) {
    return index < length-1;
}

module.exports = {
    HtmlGenerator
};