function DateChangeMessage() {
    //prefix = "2020.02.18"
    //content = "星期二"
    
    this.setProperties = function(prefix, content) {
        this.dateChange = getDateChange(prefix);
        this.type = MSG_TYPE_DATE_CHANGE;
        return this;
    };
    
    this.appendBRElements = function(dom) {
        return HtmlGenerator.appendBRElementsOfNum(0, dom);
    };
    
    this.generateMessageDOM = function(msgObj) {
        return HtmlGenerator.generateDateChangeDOM(msgObj);
    };
    
    function getDateChange(prefix) {
        return prefix.match(REGEXP_LINE_MSG_PREFIX_DATE_CHANGE)[0].split(REGEXP_LINE_DATE_CHANGE_DELIMITER).join('/');
    }
}

export {
    DateChangeMessage
};