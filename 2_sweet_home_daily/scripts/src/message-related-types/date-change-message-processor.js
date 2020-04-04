import {HTML_CLASS, HTML_TAG_NAME, HTML_PROPERTY} from "../html-properties.js";
import {HtmlGenerator} from "../html-generator.js";

const DATE_CHANGE_REGEXP = new RegExp("\\d{4}\\.\\d{2}\\.\\d{2}");

function DateChangeMessageProcessor(prefix) {
    //message contents (start)
    const DATE_CHANGE = getDateChange(prefix);
    //message contents (end)
    
    function getDateChange(prefix) {
        return prefix.match(DATE_CHANGE_REGEXP)[0]
                .split(/\./).join('/');
    }
    
    this.getMessage = function() {
        return {
            dateChange: DATE_CHANGE
        };
    };
    
    this.getDom = function() {
        const dateChangeTextDom = getDateChangeTextDom();
        const dom = HtmlGenerator.generateDOMWithChildren(
            {
                [HTML_PROPERTY.tagName]: HTML_TAG_NAME.div,
                [HTML_PROPERTY.className]: HTML_CLASS.dateChange
            },
            [dateChangeTextDom]
        );
        return dom;
    };
    
    function getDateChangeTextDom() {
        return document.createTextNode(DATE_CHANGE);
    }
}

DateChangeMessageProcessor.getMessagePrefixRegexp = function() {
    return DATE_CHANGE_REGEXP;
}

export {
    DateChangeMessageProcessor
};