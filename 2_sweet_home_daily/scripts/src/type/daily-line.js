import {MessageProcessor} from "./message-related-types/message-processor.js";

function DailyLINE(dateAndNum) {
    //public:
    this.title = getTitle();
    this.date = getDate();
    this.media = getMedia();
    
    function getTitle() {
        return DAILY_TITLE[dateAndNum];
    }
    
    function getDate() {
        let timeFormatter = new TimeFormatter(DateAndNumParser.getDate(dateAndNum));
        return timeFormatter.getDateOfDailyLINE();
    }
    
    function getMedia() {
        return Media.getInstance(dateAndNum);
    }
    
    this.getMessageProcessors = function() {
        return new MessageProcessor(DAILY_MESSAGE[dateAndNum]).getMessageProcessors();
    }
}

export {
    DailyLINE
};