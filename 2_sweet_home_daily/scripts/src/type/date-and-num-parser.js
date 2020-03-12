function DateAndNumParser(dateAndNum) {}
DateAndNumParser.getDate = function(dateAndNum) {
    return dateAndNum.split(REGEXP_DATE_AND_NUM_DELIMITER)[0];
};
DateAndNumParser.getNum = function(dateAndNum) {
    return dateAndNum.split(REGEXP_DATE_AND_NUM_DELIMITER)[1];
};

export {
    DateAndNumParser
};