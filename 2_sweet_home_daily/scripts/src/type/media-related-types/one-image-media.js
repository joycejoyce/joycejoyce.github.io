function OneImageMedia(dateAndNum) {
    this.type = MEDIA_TYPE_ONE_IMAGE;
    this.src = Media.getSrcFilePaths(dateAndNum)[0];
    this.generateMediaDOM = function() {
        return HtmlGenerator.generateOneImageMediaDOM(this.src);
    }
}

export {
    OneImageMedia
};