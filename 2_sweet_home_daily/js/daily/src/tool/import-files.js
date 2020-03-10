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
    const folder = "../constant/";
    Object.entries(require(folder + 'constants.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'line-constants.js')).forEach(([name, imported]) => ary[name] = imported);
}

function importTools(ary) {
    const folder = "../tool/";
    Object.entries(require(folder + 'exception.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'regexp.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'tool.js')).forEach(([name, imported]) => ary[name] = imported);
}

function importTypes(ary) {
    const folder = "../type/";
    Object.entries(require(folder + 'html-generator.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'time-formatter.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'date-and-num-parser.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'media.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'member-chat-message.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'member.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'date-change-message.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'message-parser.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'message.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'daily-line.js')).forEach(([name, imported]) => ary[name] = imported);
    Object.entries(require(folder + 'member-chat-dom-generator.js')).forEach(([name, imported]) => ary[name] = imported);
}

module.exports = {
    doImport,
    IMPORT_TYPE_ES6,
    IMPORT_TYPE_COMMON_JS
};