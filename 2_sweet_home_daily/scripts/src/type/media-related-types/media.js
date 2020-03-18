function Media(dateAndNum) {
    //public:
    this.type = DAILY_MEDIA_TYPE[dateAndNum];
    this.src = Media.getSrcFilePaths(dateAndNum);
}
Media.create = function(dateAndNum) {
    const type = Media.getMediaType(dateAndNum);
    switch(type) {
        case MEDIA_TYPE_ONE_IMAGE:
            return new OneImageMedia(dateAndNum);
        case MEDIA_TYPE_MULTI_IMAGE:
            return new MultiImageMedia(dateAndNum);
        default:
            throw new MessageFormatException(ERR_INVALID_MEDIA_TYPE, type);
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

export {
    Media
};