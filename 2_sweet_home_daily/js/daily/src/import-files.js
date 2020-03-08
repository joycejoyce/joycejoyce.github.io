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
    
    Object.entries(require('./constants.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('./exception.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('./html-generator.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('./line-constants.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('./regexp.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require('./tool.js')).forEach(([name, imported]) => ary[name] = imported);
}

module.exports = {
    doImport,
    IMPORT_TYPE_ES6,
    IMPORT_TYPE_COMMON_JS
};