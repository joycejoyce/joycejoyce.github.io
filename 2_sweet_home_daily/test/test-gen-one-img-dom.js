Object.entries(require('./common-func-for-tests.js')).forEach(([name, imported]) => global[name] = imported);

const oneImageMedia = new DailyLINE("20200214-2").media;

beforeEach(loadHTML);

describe(`generateMediaPartOfChatDOM(oneImageMedia)`, function() {
    it(`generate 'div' DOM with media contents: one image`, function() {
        let dom = HtmlGenerator.generateMediaPartOfChatDOM(oneImageMedia);
        checkOneImageMediaDOM(dom, oneImageMedia.src);
    })
});

function checkOneImageMediaDOM(dom, mediaSrc) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_IMG,
        [HTML_PROPERTY_ID]: HTML_ID_ONE_IMG_MEDIA_PART,
        [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_CHAT_ITEM,
        [HTML_PROPERTY_SRC]: mediaSrc
       }
    );
    
}

module.exports = {
    oneImageMedia,
    checkOneImageMediaDOM
};