import {MessageProcessor} from "./message-related-types/message-processor.js";
import {MediaProcessor, DAILY_MEDIA_TYPE, DAILY_MEDIA_SRC} from "./media-related-types/media-processor.js";

function DailyLINE(dateAndNum) {
    //public:
    this.title = getTitle();
    this.date = getDate();
    
    function getTitle() {
        return DAILY_TITLE[dateAndNum];
    }
    
    function getDate() {
        let timeFormatter = new TimeFormatter(DateAndNumParser.getDate(dateAndNum));
        return timeFormatter.getDateOfDailyLINE();
    }
    
    this.getMediaProcessor = function() {
        return new MediaProcessor(dateAndNum, DAILY_MEDIA_TYPE[dateAndNum], DAILY_MEDIA_SRC[dateAndNum]).getMediaProcessor();
    };
    
    this.getMessageProcessors = function() {
        return new MessageProcessor(DAILY_MESSAGE[dateAndNum]).getMessageProcessors();
    };
}

export {
    DailyLINE
};