import {HTML_CLASS, HTML_ID, HTML_TAG_NAME, HTML_PROPERTY} from "../html-properties.js";
import {HtmlGenerator} from "../html-generator.js";
import {MediaProcessor} from "./media-processor.js";

function OneVideoMediaProcessor(videoSrc) {    
    this.getDom = function() {
        const videoTagDom = getVideoTagDom();
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
                [HTML_PROPERTY.id]: HTML_ID.oneVideoMediaPart,
                [HTML_PROPERTY.className]: HTML_CLASS.chatItem
            },
            [videoTagDom]
        );
        return dom;
    }
    
    function getVideoTagDom() {
        const sourceTagDom = getSourceTagDom();
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.video,
                [HTML_PROPERTY.controls]: true
            },
            [sourceTagDom]
        );
        return dom;
    }
    
    function getSourceTagDom() {
        const videoType = getVideoType();
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.source,
                [HTML_PROPERTY.src]: videoSrc[0],
                [HTML_PROPERTY.type]: videoType
            },
            []
        );
        return dom;
    }
    
    function getVideoType() {
        const VIDEO_FORMAT_PREFIX = "video/";
        return VIDEO_FORMAT_PREFIX + MediaProcessor.getFileExtention(videoSrc[0]);
    }
}

export {
    OneVideoMediaProcessor
};