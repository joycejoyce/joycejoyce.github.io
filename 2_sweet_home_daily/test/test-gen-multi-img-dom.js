Object.entries(require('./common-func-for-tests.js')).forEach(([name, imported]) => global[name] = imported);

const dateAndNum = "20190822-2";
const dailyLINE = new DailyLINE(dateAndNum);
const multiImageMedia = dailyLINE.media;

beforeEach(loadHTML);

describe(`multiImageMedia.src.length`, function() {
    it(`equals to 5`, function() {
        expect(multiImageMedia.src.length).to.eql(5);
    })
});

describe(`HtmlGenerator.generateShrinkImgDOM(imgSrc)`, function() {
    it(`generate 1 DOM with className "${HTML_CLASS_SHRINK_IMG}"`, function() {
        let dom = HtmlGenerator.generateShrinkImgDOM(multiImageMedia.src[0]);
        checkShrinkImgDOM(dom, multiImageMedia.src[0]);
        checkClassOfNotFirstShrinkImgDOM(dom);
    })
});

describe(`HtmlGenerator.generateMultiShrinkImgDOM(imgSrcAry)`, function() {
    it(`generate 1 DOM with id "${HTML_ID_SHRINK_IMGS}"`, function() {
        let dom = HtmlGenerator.generateMultiShrinkImgDOM(multiImageMedia.src);
        checkMultiShrinkImgDOM(dom, multiImageMedia.src);
    })
});

describe(`HtmlGenerator.generateExpandImgDOM(imgSrc)`, function() {
    it(`generate 1 DOM with id "${HTML_ID_EXPAND_IMG}"`, function() {
        let dom = HtmlGenerator.generateExpandImgDOM(multiImageMedia.src[0]);
        checkExpandImgDOM(dom, multiImageMedia.src[0]);
    })
});

describe(`HtmlGenerator.generateMediaPartOfChatDOM(multiImageMedia)`, function() {
    it(`generate 1 DOM with id "${HTML_ID_MULTI_IMG_MEDIA_PART}"`, function() {
        let dom = HtmlGenerator.generateMediaPartOfChatDOM(multiImageMedia);
        checkMultiImageMediaDOM(dom, multiImageMedia.src);
    })
});

describe(`MultiImageMedia.addClickEventHandlerForShrinkImg()`, function() {
    it(`add the event handler to DOM class=${HTML_CLASS_SHRINK_IMG}`, function() {
        let dom = HtmlGenerator.generateMediaPartOfChatDOM(multiImageMedia);
        $(HTML_ELEMENT_BODY).append(dom);
        MultiImageMedia.addClickEventHandlerForShrinkImg();
        checkClickEventAddedToDOM($("."+HTML_CLASS_SHRINK_IMG));
    })
});

describe(`MultiImageMedia.addClickEventHandlerForExpandImg()`, function() {
    it(`add the event handler to DOM id=${HTML_ID_EXPAND_IMG}`, function() {
        let dom = HtmlGenerator.generateMediaPartOfChatDOM(multiImageMedia);
        $(HTML_ELEMENT_BODY).append(dom);
        MultiImageMedia.addClickEventHandlerForExpandImg();
        checkClickEventAddedToDOM($("#"+HTML_ID_EXPAND_IMG));
    })
});

function checkMultiShrinkImgDOM(dom, imgSrcAry) {
    checkDOMProperties(dom, {[HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV});
    expect(dom.childNodes.length).to.eql(multiImageMedia.src.length);
    
    let excludeFirstImgSrcAry = imgSrcAry.filter((item, index) => index > 0);
    let excludeFirstShrinkImgDOM = [dom.childNodes].filter((item, index) => index > 0);
    excludeFirstShrinkImgDOM.forEach((item) => checkClassOfNotFirstShrinkImgDOM(item));
    
    checkClassOfFirstShrinkImgDOM(dom.childNodes[0]);
    
    dom.childNodes.forEach((item, index) => checkShrinkImgDOM(item, imgSrcAry[index]));
}

function checkClassOfNotFirstShrinkImgDOM(dom) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_SHRINK_IMG
       }
    );
}

function checkClassOfFirstShrinkImgDOM(dom) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_SHRINK_IMG + " " + HTML_CLASS_CURRENT_IMG
       }
    );
}

function checkShrinkImgDOM(dom, imgSrc) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_IMG,
        [HTML_PROPERTY_SRC]: imgSrc
       }
    );
}

function checkExpandImgDOM(dom, imgSrc) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_IMG,
        [HTML_PROPERTY_ID]: HTML_ID_EXPAND_IMG,
        [HTML_PROPERTY_SRC]: imgSrc,
        [HTML_PROPERTY_DATA_VALUE]: imgSrc
       }
    );
}

function checkMultiImageMediaDOM(dom, mediaSrc) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
        [HTML_PROPERTY_ID]: HTML_ID_MULTI_IMG_MEDIA_PART,
        [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_CHAT_ITEM
       }
    );
    checkMultiShrinkImgDOM(dom.childNodes[0], mediaSrc);
    checkExpandImgDOM(dom.childNodes[1], mediaSrc[0]);
}

function checkCSSForMediaPart(dom) {
    expect($(dom).css(CSS_NAME_DISPLAY)).to.eql(CSS_VALUE_GRID);
    expect($(dom).css(CSS_NAME_GRID_TEMPLATE_COLUMNS)).to.eql(CSS_VALUE_1FR_7FR);
    expect($(dom).css(CSS_NAME_COLUMN_GAP)).to.eql(CSS_VALUE_0PX);
    expect($(dom).css(CSS_NAME_ROW_GAP)).to.eql(CSS_VALUE_10PX);
}

function checkClickEventAddedToDOM(selector) {
    expect(selector.data(IS_CLICKED)).to.not.eql(true);
    selector.click();
    expect(selector.data(IS_CLICKED)).to.eql(true);
}