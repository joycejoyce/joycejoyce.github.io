const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

const jsdom = require("jsdom");
const { JSDOM } = jsdom;

beforeEach(function() {
    return JSDOM.fromFile('test_others/test.html')
        .then((dom) => {
        global.window = dom.window;
        global.document = window.document;
    });
});

describe("jsdom", function() {
    it("should create 'p' element", function() {
        const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);
        console.log(dom.window.document.querySelector("p").textContent); // "Hello world"
    })
});

var updateMsg = require('./modules.js');
describe('updateMsg', function () {
  it ('updates the innerHTML of element with id "msg"', function () {
    expect(document.getElementById('msg').innerHTML).to.equal('Hello, World!');
    updateMsg('The new msg!');
    expect(document.getElementById('msg').innerHTML).to.equal('The new msg!');
  });
});

describe('print require', function() {
    it('print require contents', function() {
        console.log(require('../constants.js'));
    })
});

/*
describe("arrays equal", function() {
    it("ary1([1, 2, 3]) === ary2([1, 2, 3]) should be true", function() {
        const ary1 = [1, 2, 3];
        const ary2 = [1, 2, 3];
        assert(JSON.stringify(ary1) === JSON.stringify(ary2), "JSON.stringify(ary1)=" + JSON.stringify(ary1) + " | " + "JSON.stringify(ary2)=" + JSON.stringify(ary2));
    })
});

describe("arrays not equal", function() {
    it("ary1([1, 2, 3]) !== ary2([1, 2]) should be true", function() {
        const ary1 = [1, 2, 3];
        const ary2 = [1, 2];
        assert(JSON.stringify(ary1) !== JSON.stringify(ary2), "JSON.stringify(ary1)=" + JSON.stringify(ary1) + " | " + "JSON.stringify(ary2)=" + JSON.stringify(ary2));
    })
});
*/