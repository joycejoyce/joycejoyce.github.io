import {HTML_CLASS, HTML_ID, HTML_TAG_NAME, HTML_PROPERTY, HTML_ATTRIBUTE} from "../html-properties.js";
import {HtmlGenerator} from "../html-generator.js";
//import {$} from "../../../../test/common-func-for-tests.js";

function MultiImageMediaProcessor(imgSrcs) {    
    this.getDom = function() {
        const shrinkImgDoms = imgSrcs.map(imgSrc => getShrinkImgDom(imgSrc));
        processFirstShrinkImgDom(shrinkImgDoms[0]);
        
        const shrinkImgsDom = getShrinkImgsDom(shrinkImgDoms);
        const expandImgDom = getExpandImgDom(imgSrcs[0]);
        const multiImgMediaDom = getMultiImgMediaDom(shrinkImgsDom, expandImgDom);
        
        this.addEventListeners(multiImgMediaDom);
        
        return multiImgMediaDom;
    }
    
    function getShrinkImgDom(imgSrc) {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.img,
                [HTML_PROPERTY.className]: HTML_CLASS.shrinkImg,
                [HTML_PROPERTY.src]: imgSrc
            },
            []
        );
        return dom;
    }
    
    function processFirstShrinkImgDom(dom) {
        dom.id = HTML_ID.currentImg;
    }
    
    function getShrinkImgsDom(shrinkImgDoms) {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
                [HTML_PROPERTY.id]: HTML_ID.shrinkImgs
            },
            shrinkImgDoms
        );
        return dom;
    }
    
    function getExpandImgDom(imgSrc) {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.img,
                [HTML_PROPERTY.id]: HTML_ID.expandImg,
                [HTML_PROPERTY.src]: imgSrc
            },
            []
        );
        dom.setAttribute(HTML_ATTRIBUTE.dataFirstImgsrc, imgSrc);
        return dom;
    }
    
    function getMultiImgMediaDom(shrinkImgsDom, expandImgDom) {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
                [HTML_PROPERTY.id]: HTML_ID.multiImgMediaPart,
                [HTML_PROPERTY.className]: HTML_CLASS.chatItem
            },
            [shrinkImgsDom, expandImgDom]
        );
        return dom;
    }
    
    this.addEventListeners = function(multiImgDom) {
        addClickEventListenerForShrinkImg(multiImgDom);
        addClickEventListenerForExpandImg(multiImgDom);
    };
    
    function addClickEventListenerForShrinkImg(multiImgDom) {
        const shrinkImgDoms = $(multiImgDom).find("."+HTML_CLASS.shrinkImg);
        const expandImgDom = $(multiImgDom).find("#"+HTML_ID.expandImg);
        $(shrinkImgDoms).each(function() {
            $(this).click(function() {
                const currentShrinkImgDom = getCurrentShrinkImgDom(multiImgDom);
                $(currentShrinkImgDom).removeAttr(HTML_PROPERTY.id);
                
                const clickedShrinkImgSrc = $(this).prop(HTML_PROPERTY.src);
                $(expandImgDom).prop(HTML_PROPERTY.src, clickedShrinkImgSrc);
                
                $(this).attr(HTML_PROPERTY.id, HTML_ID.currentImg); //id "current-img" is for css display
            });
        });
    }
    
    function addClickEventListenerForExpandImg(multiImgDom) {
        const expandImgDom = $(multiImgDom).find("#"+HTML_ID.expandImg);
        $(expandImgDom).click(function() {
            const currentShrinkImgDom = getCurrentShrinkImgDom(multiImgDom);
            const nextShrinkImgDom = getNextShrinkImgDom(currentShrinkImgDom, multiImgDom);
            const nextShrinkImgSrc = $(nextShrinkImgDom).prop(HTML_PROPERTY.src);

            $(currentShrinkImgDom).removeAttr(HTML_PROPERTY.id);
            $(expandImgDom).prop(HTML_PROPERTY.src, nextShrinkImgSrc);
            $(nextShrinkImgDom).attr(HTML_PROPERTY.id, HTML_ID.currentImg);
        });
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
}

export {
    MultiImageMediaProcessor
};