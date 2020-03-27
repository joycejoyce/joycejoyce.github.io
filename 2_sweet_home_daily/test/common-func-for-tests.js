/*const import_files = require("../scripts/src/tool/import-files.js");
import_files.doImport(import_files.IMPORT_TYPE_COMMON_JS);*/

const chai = require("chai");
const expect = chai.expect;
const assert = chai.assert;

const { JSDOM } = require("jsdom");
const jsdom = new JSDOM("<!doctype html><html><body></body></html>");
const { window } = jsdom;
const $ = global.jQuery = require("jquery")(window);

function checkDOMProperties(dom, propertiesToCheck) {
    let keys = Object.keys(propertiesToCheck);
    let values = Object.values(propertiesToCheck);
    keys.forEach((item, index) => {
        expect(dom[item]).to.eql(values[index]);
    });
}

function loadHTML() {
    return JSDOM.fromFile("./daily.html")
        .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
    });
};

module.exports = {
    chai,
    expect,
    assert,
    JSDOM,
    jsdom,
    window,
    $,
    checkDOMProperties,
    loadHTML
};