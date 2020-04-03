function MediaProcessor(){}
MediaProcessor.getFileExtention = function(fileName) {
    return fileName.split(".").pop();
};

export {
    MediaProcessor
};