function DailyLINE(dateAndNum) {
    //public:
    this.title = getTitle();
    this.date = getDate();
    this.messageObjects = getMessageObjects();
    this.media = getMedia();
    
    function getTitle() {
        return DAILY_TITLE[dateAndNum];
    }
    
    function getDate() {
        let timeFormatter = new TimeFormatter(DateAndNumParser.getDate(dateAndNum));
        return timeFormatter.getDateOfDailyLINE();
    }
    
    function getMessageObjects() {
        let wholeMsgStr = DAILY_MESSAGE[dateAndNum];
        let messageParser = new MessageParser(wholeMsgStr);
        return messageParser.messageObjects;
    }
    
    function getMedia() {
        return new Media(dateAndNum);
    }
}

export {
    DailyLINE
};