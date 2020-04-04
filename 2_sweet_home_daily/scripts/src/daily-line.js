import {MessageProcessor, DAILY_MESSAGE} from "./message-related-types/message-processor.js";
import {MediaProcessor} from "./media-related-types/media-processor.js";
import {DateAndNumParser} from "./util/date-and-num-parser.js";
import {TimeFormatter} from "./util/time-formatter.js";

function DailyLINE(dateAndNum) {
    //public:
    this.title = getTitle();
    this.date = getDate();
        
    function getTitle() {
        const DAILY_TITLE = {
            "20190822-1": "小肥橘",
            "20190822-2": "小法",
            "20200214-2": "小螞蟻玩水"
        };
        return DAILY_TITLE[dateAndNum];
    }
    
    function getDate() {
        let timeFormatter = new TimeFormatter(DateAndNumParser.getDate(dateAndNum));
        return timeFormatter.getDateOfDailyLINE();
    }
    
    this.getMediaProcessor = function() {
        return new MediaProcessor(dateAndNum).getMediaProcessor();
    };
    
    this.getMessageProcessors = function() {
        return new MessageProcessor(dateAndNum).getMessageProcessors();
    };
}

export {
    DailyLINE
};