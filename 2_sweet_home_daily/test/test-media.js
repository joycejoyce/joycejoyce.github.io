import {expect, loadHTML} from "./common-func-for-tests.js";
import {OneImageMediaProcessor} from "../scripts/src/media-related-types/one-image-media-processor.js";
import {MultiImageMediaProcessor} from "../scripts/src/media-related-types/multi-image-media-processor.js";
import {OneVideoMediaProcessor} from "../scripts/src/media-related-types/one-video-media-processor.js";
import {MediaProcessor, MEDIA_TYPE} from "../scripts/src/media-related-types/media-processor.js";
import {HTML_CLASS, HTML_ID, HTML_PROPERTY, HTML_ATTRIBUTE} from "../scripts/src/html-properties.js";

beforeEach(loadHTML);

const imgSrc = ["./images/2020/02/14/2/S__43147276.jpg"];
const imgSrcs = ["./images/2019/08/22/2/17201.jpg","./images/2019/08/22/2/17202.jpg","./images/2019/08/22/2/17203.jpg"];
const videoSrc = ["./images/2019/08/22/1/588172451.952125.mp4"];

describe(`new OneImageMediaProcessor(imgSrc)`, function() {
    it(`return a OneImageMediaProcessor`, function() {
        const processor = new OneImageMediaProcessor(imgSrc);
        checkIsOneImageMediaProcessor(processor);
    })
})

function checkIsOneImageMediaProcessor(processor) {
    expect(processor instanceof OneImageMediaProcessor).to.be.true;
    expect(processor instanceof MultiImageMediaProcessor).to.be.false;
}

describe(`(OneImageMediaProcessor)getDom()`, function() {
    it(`return a DOM of the OneImageMedia`, function() {
        const dom = new OneImageMediaProcessor(imgSrc).getDom();
        const expectedOuterHTML = `<img id="one-img-media-part" class="chat-item" src="./images/2020/02/14/2/S__43147276.jpg">`;
        expect(dom.outerHTML).to.eql(expectedOuterHTML);
    })
})

describe(`new MultiImageMediaProcessor(imgSrcs)`, function() {
    it(`return a MultiImageMediaProcessor`, function() {
        const processor = new MultiImageMediaProcessor(imgSrc);
        checkIsMultiImageMediaProcessor(processor);
    })
})

function checkIsMultiImageMediaProcessor(processor) {
    expect(processor instanceof MultiImageMediaProcessor).to.be.true;
    expect(processor instanceof OneImageMediaProcessor).to.be.false;
}

describe(`(MultiImageMediaProcessor)getDom()`, function() {
    it(`return a DOM of the MultiImageMedia`, function() {
        const dom = new MultiImageMediaProcessor(imgSrcs).getDom();
        const expectedOuterHTML = `<div id="multi-img-media-part" class="chat-item"><div id="shrink-imgs"><img class="shrink-img" src="./images/2019/08/22/2/17201.jpg" id="current-img"><img class="shrink-img" src="./images/2019/08/22/2/17202.jpg"><img class="shrink-img" src="./images/2019/08/22/2/17203.jpg"></div><img id="expand-img" src="./images/2019/08/22/2/17201.jpg" data-first-imgsrc="./images/2019/08/22/2/17201.jpg"></div>`;
        expect(dom.outerHTML).to.eql(expectedOuterHTML);
    })
})

describe(`(MultiImageMediaProcessor)addEventListeners(multiImgDom)`, function() {
    it(`add "click" event listeners for class "${HTML_CLASS.shrinkImg}" and id "${HTML_ID.expandImg}"`, function() {
        let processor = new MultiImageMediaProcessor(imgSrcs);
        const multiImgDom = processor.getDom();
        checkShrinkImgClickEventListener(multiImgDom);
        checkExpandImgClickEventListener(multiImgDom);
    })
})

function checkShrinkImgClickEventListener(multiImgDom) {
    const shrinkImgDoms = $(multiImgDom).find("."+HTML_CLASS.shrinkImg);
    const expandImgDom = $(multiImgDom).find("#"+HTML_ID.expandImg);
    $(shrinkImgDoms).each(function() {
        $(this).click();
        const shrinkImgSrc = $(this).prop(HTML_PROPERTY.src);
        const expandImgSrc = $(expandImgDom).prop(HTML_PROPERTY.src);
        expect(shrinkImgSrc).to.eql(expandImgSrc);
        expect($(this).attr(HTML_PROPERTY.id)).to.eql(HTML_ID.currentImg);
        expect($(multiImgDom).find("#"+HTML_ID.currentImg).length).to.eql(1);
    });
}

function checkExpandImgClickEventListener(multiImgDom) {
    for(let i=0; i<multiImgDom.length; i++) {
        const currentShrinkImgDom = getCurrentShrinkImgDom(multiImgDom);
        const nextShrinkImgDom = getNextShrinkImgDom(currentShrinkImgDom, multiImgDom);
        const nextShrinkImgSrc = $(nextShrinkImgDom).prop(HTML_PROPERTY.src);

        const expandImgDom = $(multiImgDom).find("#"+HTML_ID.expandImg);
        $(expandImgDom).click();

        expect($(expandImgDom).prop(HTML_PROPERTY.src)).to.eql(nextShrinkImgSrc);
        expect($(nextShrinkImgDom).attr(HTML_PROPERTY.id)).to.eql(HTML_ID.currentImg);
        expect($(multiImgDom).find("#"+HTML_ID.currentImg).length).to.eql(1);
    }
}

function getNextShrinkImgDom(currentShrinkImgDom, multiImgDom) {
    if($(currentShrinkImgDom).next().prop(HTML_PROPERTY.src) != undefined) {
        return $(currentShrinkImgDom).next();
    }
    else {
        return getFirstShrinkImgDom(multiImgDom);
    }
}

function getCurrentShrinkImgDom(multiImgDom) {
    return $(multiImgDom).find("#"+HTML_ID.currentImg);
}

function getFirstShrinkImgDom(multiImgDom) {
    const firstImgSrc = $(multiImgDom).find("#"+HTML_ID.expandImg).attr(HTML_ATTRIBUTE.dataFirstImgsrc);
    return $(multiImgDom).find("."+HTML_CLASS.shrinkImg).filter(`img[src="${firstImgSrc}"]`);
}

describe(`new OneVideoMediaProcessor(videoSrc)`, function() {
    it(`return a OneVideoMediaProcessor`, function() {
        const processor = new OneVideoMediaProcessor(videoSrc);
        checkIsOneVideoMediaProcessor(processor);
    })
})

function checkIsOneVideoMediaProcessor(processor) {
    expect(processor instanceof OneVideoMediaProcessor).to.be.true;
    expect(processor instanceof OneImageMediaProcessor).to.be.false;
}

describe(`(OneVideoMediaProcessor)getDom()`, function() {
    it(`return a DOM of the OneVideoMedia`, function() {
        const dom = new OneVideoMediaProcessor(videoSrc).getDom();
        const expectedOuterHTML = `<div id="one-video-media-part" class="chat-item"><video controls=""><source src="./images/2019/08/22/1/588172451.952125.mp4" type="video/mp4"></video></div>`;
        expect(dom.outerHTML).to.eql(expectedOuterHTML);
    })
})

describe(`new MediaProcessor(dateAndNum)`, function() {
    it(`return a MediaProcessor`, function() {
        const dateAndNum = "20190822-1";
        const processor = new MediaProcessor(dateAndNum);
        checkIsMediaProcessor(processor);
    })
})

function checkIsMediaProcessor(processor) {
    expect(processor instanceof MediaProcessor).to.be.true;
    expect(processor instanceof OneImageMediaProcessor).to.be.false;
    expect(processor instanceof MultiImageMediaProcessor).to.be.false;
}

describe(`(MediaProcessor)getMediaProcessor()`, function() {
    it(`return a media processor`, function() {
        const dateAndNums = ["20190822-1", "20190822-2", "20200214-2"];
        
        const processors =
        dateAndNums.reduce((mediaProcessors, dateAndNum) => {
            const processor = new MediaProcessor(dateAndNum);
            const mediaProcessor = processor.getMediaProcessor();
            mediaProcessors.push(mediaProcessor);
            return mediaProcessors;
        }, []);
        
        expect(processors.length).to.eql(3);
        checkIsOneVideoMediaProcessor(processors[0]);
        checkIsMultiImageMediaProcessor(processors[1]);
        checkIsOneImageMediaProcessor(processors[2]);
    })
})
