import {HTML_CLASS, HTML_ID, HTML_TAG_NAME, HTML_PROPERTY} from "../../constant/html-properties.js";
import {HtmlGenerator} from "../html-generator.js";

function OneImageMediaProcessor(imgSrc) {
    this.getDom = function() {
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.img,
                [HTML_PROPERTY.id]: HTML_ID.oneImgMediaPart,
                [HTML_PROPERTY.className]: HTML_CLASS.chatItem,
                [HTML_PROPERTY.src]: imgSrc[0]
            },
        []);
        return dom;
    };
}

export {
    OneImageMediaProcessor
};