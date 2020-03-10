function Media(dateAndNum) {
    //public:
    this.type = DAILY_MEDIA_TYPE[dateAndNum];
    this.src = Media.getSrcFilePaths(dateAndNum);
}
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

export {
    Media
};