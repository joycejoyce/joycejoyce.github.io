function RegexpUtil() {}

RegexpUtil.getConcatedRegexps = function(regexps, concator) {
    const regexpSource = regexps.map(item => item.source);
    //regexpSource.forEach(item => console.log(`[${regexpSource}]`));
    
    const wrappedWithParentheses = regexpSource.map(item => "(" + item + ")");
    //console.log("wrappedWithParentheses = [" + wrappedWithParentheses + "]");

    const concated = wrappedWithParentheses.reduce((result, regexp, index) => {
        if(index > 0) {
            result += concator;
        }
        result += regexp;
        return result;
    }, "");
    //console.log("concated = [" + concated + "]");

    return new RegExp(concated);
};

RegexpUtil.getRegexpWithoutSlash = function(regexp) {
    return regexp.source.replace("\/", "g");
}



export {
    RegexpUtil
};