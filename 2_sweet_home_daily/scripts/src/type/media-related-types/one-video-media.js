function OneVideoMedia(dateAndNum) {
    this.type = MEDIA_TYPE_ONE_VIDEO;
    this.src = Media.getSrcFilePaths(dateAndNum)[0];
    this.generateMediaDOM = function() {
        return HtmlGenerator.generateOneVideoMediaDOM(this.src);
    };
    this.addEventListeners = function() {};
}
OneVideoMedia.getVideoFormat = function(fileName) {
    return VIDEO_FORMAT_PREFIX + Media.getFileExtention(fileName);
};

export {
    OneVideoMedia
};