function OneVideoMedia(dateAndNum) {
    this.type = MEDIA_TYPE_ONE_VIDEO;
    this.src = Media.getSrcFilePaths(dateAndNum)[0];
    this.generateMediaDOM = function() {
        console.log("video html = " + HtmlGenerator.generateOneVideoMediaDOM(this.src).outerHTML);
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