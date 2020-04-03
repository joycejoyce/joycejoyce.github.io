import {expect, loadHTML, $} from "./common-func-for-tests.js";
import {OneImageMediaProcessor} from "../scripts/src/type/media-related-types/one-image-media-processor.js"
import {MultiImageMediaProcessor} from "../scripts/src/type/media-related-types/multi-image-media-processor.js"
import {HTML_CLASS, HTML_ID, HTML_PROPERTY, HTML_ATTRIBUTE} from "../scripts/src/constant/html-properties.js"

beforeEach(loadHTML);

const imageSrc = "./images/2020/02/14/2/S__43147276.jpg";
const imgSrcs = ["./images/2019/08/22/2/17201.jpg","./images/2019/08/22/2/17202.jpg","./images/2019/08/22/2/17203.jpg"];

describe(`new OneImageMediaProcessor(imgSrc)`, function() {
    it(`return a OneImageMediaProcessor`, function() {
        const processor = new OneImageMediaProcessor(imageSrc);
        checkIsOneImageMediaProcessor(processor);
    })
})

function checkIsOneImageMediaProcessor(processor) {
    expect(processor instanceof OneImageMediaProcessor).to.be.true;
    expect(processor instanceof MultiImageMediaProcessor).to.be.false;
}

describe(`(OneImageMediaProcessor)getDom()`, function() {
    it(`return a DOM of the OneImageMedia`, function() {
        const dom = new OneImageMediaProcessor(imageSrc).getDom();
        const expectedOuterHTML = `<img id="one-img-media-part" class="chat-item" src="./images/2020/02/14/2/S__43147276.jpg">`;
        expect(dom.outerHTML).to.eql(expectedOuterHTML);
    })
})

describe(`new MultiImageMediaProcessor(imgSrcs)`, function() {
    it(`return a MultiImageMediaProcessor`, function() {
        const processor = new MultiImageMediaProcessor(imageSrc);
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
        processor.addEventListeners(multiImgDom);
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