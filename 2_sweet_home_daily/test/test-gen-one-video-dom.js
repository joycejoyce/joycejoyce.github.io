Object.entries(require('./common-func-for-tests.js')).forEach(([name, imported]) => global[name] = imported);

const dateAndNum = "20190822-1";
const oneVideoMedia = new DailyLINE(dateAndNum).media;

beforeEach(loadHTML);

describe(`Media.getInstance(${dateAndNum})`, function() {
    it(`return instanceof OneVideoMedia`, function() {
        let media = Media.getInstance(dateAndNum);
        expect(media instanceof OneVideoMedia).to.be.true;
    })
});

describe(`Media.getFileExtention("xxx.ooo.mp4")`, function() {
    it(`should be "mp4"`, function() {
        let fileExtention = Media.getFileExtention("xxx.ooo.mp4");
        expect(fileExtention).to.eql("mp4");
    })
});

describe(`OneVideoMedia.getVideoFormat("xxx.ooo.mp4")`, function() {
    it(`should be "video/mp4"`, function() {
        let videoType = OneVideoMedia.getVideoFormat("xxx.ooo.mp4");
        expect(videoType).to.eql("video/mp4");
    })
});

describe(`Media.getFileName("../xxx/ooo.mp4")`, function() {
    it(`should be ooo.mp4`, function() {
        let fileName = Media.getFileName("../xxx/ooo.mp4");
        expect(fileName).to.eql("ooo.mp4");
        
        fileName = Media.getFileName("..\\xxx\\ooo.mp4");
        expect(fileName).to.eql("ooo.mp4");
    })
});

describe(`HtmlGenerator.generateVideoSourceDOM(oneVideoMedia.src)`, function() {
    it(`generate a <${HTML_TAG_NAME_SOURCE}> DOM`, function() {
        let dom = HtmlGenerator.generateVideoSourceDOM(oneVideoMedia.src);
        checkVideoSourceDOM(dom, oneVideoMedia.src);
    })
});

describe(`HtmlGenerator.generateVideoDOM(oneVideoMedia.src)`, function() {
    it(`generate 1 <${HTML_TAG_NAME_VIDEO}> DOM`, function() {
        let dom = HtmlGenerator.generateVideoDOM(oneVideoMedia.src);
        checkVideoDOM(dom, oneVideoMedia.src);
    })
});

describe(`generateMediaPartOfChatDOM(oneVideoMedia)`, function() {
    it(`generate 'div' DOM with media contents: one video`, function() {
        let dom = HtmlGenerator.generateMediaPartOfChatDOM(oneVideoMedia);
        checkOneVideoMediaDOM(dom, oneVideoMedia.src);
    })
});

function checkVideoSourceDOM(dom, videoSrc) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_SOURCE,
        [HTML_PROPERTY_SRC]: videoSrc,
        [HTML_PROPERTY_TYPE]: "video/mp4"
       }
    );
}

function checkVideoDOM(dom, videoSrc) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_VIDEO,
        [HTML_PROPERTY_CONTROLS]: true
       }
    );
    checkVideoSourceDOM(dom.childNodes[0], videoSrc);
}

function checkOneVideoMediaDOM(dom, videoSrc) {
    checkDOMProperties(dom, 
       {
        [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
        [HTML_PROPERTY_ID]: HTML_ID_ONE_VIDEO_MEDIA_PART,
        [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_CHAT_ITEM
       }
    );
    checkVideoDOM(dom.childNodes[0], videoSrc);
}