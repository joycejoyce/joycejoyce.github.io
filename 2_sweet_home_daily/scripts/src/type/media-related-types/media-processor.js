import {DateAndNumParser} from "../util/date-and-num-parser.js";
import {TimeFormatter} from "../util/time-formatter.js";
import {OneImageMediaProcessor} from "./one-image-media-processor.js";
import {MultiImageMediaProcessor} from "./multi-image-media-processor.js";
import {OneVideoMediaProcessor} from "./one-video-media-processor.js";

function MediaProcessor(dateAndNum, type, srcs) {
    this.getMediaProcessor = function() {
        const srcFolder = getSrcFolder(dateAndNum);
        const srcFilePaths = srcs.map(src => srcFolder + "/" + src);
        switch(type) {
            case MEDIA_TYPE.oneImage:
                return new OneImageMediaProcessor(srcFilePaths);
                break;
            case MEDIA_TYPE.multiImage:
                return new MultiImageMediaProcessor(srcFilePaths);
                break;
            case MEDIA_TYPE.oneVideo:
                return new OneVideoMediaProcessor(srcFilePaths);
                break;
            default:
                throw `Invalid media type: [${type}]`;
                break;
        }
    }
    
    function getSrcFolder(dateAndNum) {
        const date = DateAndNumParser.getDate(dateAndNum);
        const num = DateAndNumParser.getNum(dateAndNum);
        const timeFormatter = new TimeFormatter(date);
        const MEDIA_SRC_ROOT_FOLDER = "./images";
        const srcFolder = MEDIA_SRC_ROOT_FOLDER + "/" + timeFormatter.year + "/" + timeFormatter.month + "/" + timeFormatter.day + "/" + num;
        return srcFolder;
    }
}
MediaProcessor.getFileExtention = function(fileName) {
    return fileName.split(".").pop();
};

const MEDIA_TYPE = {
    oneImage: "oneImage",
    multiImage: "multiImage",
    oneVideo: "oneVideo"
}

const DAILY_MEDIA_SRC = {
    "20190822-1": ["588172451.952125.mp4"],
    "20190822-2": ["17201.jpg","17202.jpg","17203.jpg","17204.jpg","17205.jpg"],
    "20200214-2": ["S__43147276.jpg"]
}

const DAILY_MEDIA_TYPE = {
    "20190822-1": MEDIA_TYPE.oneVideo,
    "20190822-2": MEDIA_TYPE.multiImage,
    "20200214-2": MEDIA_TYPE.oneImage
}

export {
    MediaProcessor,
    MEDIA_TYPE,
    DAILY_MEDIA_SRC,
    DAILY_MEDIA_TYPE
};