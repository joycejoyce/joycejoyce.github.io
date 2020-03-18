function MultiImageMedia(dateAndNum) {
    this.type = MEDIA_TYPE_MULTI_IMAGE;
    this.src = Media.getSrcFilePaths(dateAndNum);
    this.generateMediaDOM = function() {
        return HtmlGenerator.generateMultiImageMediaDOM(this.src);
    };
}

export {
    MultiImageMedia
};