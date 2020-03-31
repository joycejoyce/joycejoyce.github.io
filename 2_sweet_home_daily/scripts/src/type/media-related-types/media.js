function Media() {}
Media.getInstance = function(dateAndNum) {
    const type = Media.getMediaType(dateAndNum);
    switch(type) {
        case MEDIA_TYPE_ONE_IMAGE:
            return new OneImageMedia(dateAndNum);
        case MEDIA_TYPE_MULTI_IMAGE:
            return new MultiImageMedia(dateAndNum);
        case MEDIA_TYPE_ONE_VIDEO:
            return new OneVideoMedia(dateAndNum);
        default:
            throw `Invalid media type: [${type}]`;
    }
};
Media.getSrcFolder = function(dateAndNum) {
    const date = DateAndNumParser.getDate(dateAndNum);
    const num = DateAndNumParser.getNum(dateAndNum);
    let timeFormatter = new TimeFormatter(date);
    
    let srcFolder = RESOURCE_FILES_LOCATION + "/" + timeFormatter.year + "/" + timeFormatter.month + "/" + timeFormatter.day + "/" + num;
    
    return srcFolder;
};
Media.getSrcFilePaths = function(dateAndNum) {
    return DAILY_MEDIA_SOURCE[dateAndNum].map(
        item => Media.getSrcFolder(dateAndNum) + "/" + item
    );
};
Media.getMediaType = function(dateAndNum) {
    return DAILY_MEDIA_TYPE[dateAndNum];
};
Media.getFileExtention = function(fileName) {
    return fileName.split(".").pop();
};
Media.getFileName = function(filePath) {
    return filePath.split(REGEXP_FOLDER_DELIMITER).pop();
}

export {
    Media
};