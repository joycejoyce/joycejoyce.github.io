const IMPORT_TYPE_ES6 = "ES6";
const IMPORT_TYPE_COMMON_JS = "CommonJS";

function doImport(importType) {
    let ary = [];
    if(importType == IMPORT_TYPE_ES6) {
        ary = window;
    }
    else if(importType == IMPORT_TYPE_COMMON_JS) {
        ary = global;
    }
    else {
        console.error("Invalid importType: " + importType);
        return;
    }
    
    importConstants(ary);
    importTools(ary);
    importTypes(ary);
}

function importConstants(ary) {
    Object.entries(require('../constant/constants.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('../constant/line-constants.js')).forEach(([name, imported]) => ary[name] = imported);
}

function importTools(ary) {
    Object.entries(require('../tool/regexp.js')).forEach(([name, imported]) => ary[name] = imported);
}

function importTypes(ary) {
    Object.entries(require('../type/html-generator.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('../type/time-formatter.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('../type/date-and-num-parser.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('../type/daily-line.js')).forEach(([name, imported]) => ary[name] = imported);
    
    importMediaRelatedTypes(ary);
}

function importMediaRelatedTypes(ary) {
    Object.entries(require('../type/media-related-types/media.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('../type/media-related-types/one-image-media.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('../type/media-related-types/multi-image-media.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('../type/media-related-types/one-video-media.js')).forEach(([name, imported]) => ary[name] = imported);
}

module.exports = {
    doImport,
    IMPORT_TYPE_ES6,
    IMPORT_TYPE_COMMON_JS
};