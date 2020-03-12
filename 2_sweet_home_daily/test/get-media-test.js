const chai = require('chai');
const expect = chai.expect;
const assert = chai.assert;

describe("DAILY_MEDIA_TYPE[\"20200214-2\"]", function() {
   it("should be \"ONE_IMAGE\"", function() {
       assert.equal(DAILY_MEDIA_TYPE["20200214-2"], "ONE_IMAGE");
   })
});

describe("DAILY_MEDIA_SOURCE[\"20200214-2\"]", function() {
    it("should be [\"S__43147276.jpg\"]", function() {
        expect(DAILY_MEDIA_SOURCE["20200214-2"]).to.eql(["S__43147276.jpg"]);
    })
});

describe("DateAndNumParser.getDate(\"20200214-2\")", function() {
    it("should be \"20200214\"", function() {
        assert.equal(DateAndNumParser.getDate("20200214-2"), "20200214");
    })
});

describe("Media.getSrcFolder(\"20200214-2\")", function() {
    it("should be \"../resource_files/2020/02/14/2\"", function() {
        assert.equal(Media.getSrcFolder("20200214-2"), "../resource_files/2020/02/14/2");
    })
});

describe("Media.getSrcFilePaths(\"20200214-2\")", function() {
    it("should be [\"../resource_files/2020/02/14/2/S__43147276.jpg\"]", function() {
        let srcFilePaths = Media.getSrcFilePaths("20200214-2");
        expect(srcFilePaths).to.eql(["../resource_files/2020/02/14/2/S__43147276.jpg"]);
    })
});

describe("media.type of 20200214-2", function() {
    it("should be \"ONE_IMAGE\"", function() {
        let media = new Media("20200214-2");
        assert.equal(media.type, "ONE_IMAGE");
    })
});

describe("media.src of 20200214-2", function() {
    it("should be [\"../resource_files/2020/02/14/2/S__43147276.jpg\"]", function() {
        let media = new Media("20200214-2");
        expect(media.src).to.eql(["../resource_files/2020/02/14/2/S__43147276.jpg"]);
    })
});

describe("DailyLINE.media.type of 20200214-2", function() {
    it("should be \"ONE_IMAGE\"", function() {
        let dailyLINE = new DailyLINE("20200214-2");
        let media = dailyLINE.media;
        expect(media.type).to.eql("ONE_IMAGE");
    })
});

describe("DailyLINE.media.src of 20200214-2", function() {
    it("should be [\"../resource_files/2020/02/14/2/S__43147276.jpg\"]", function() {
        let dailyLINE = new DailyLINE("20200214-2");
        let media = dailyLINE.media;
        expect(media.src).to.eql(["../resource_files/2020/02/14/2/S__43147276.jpg"]);
    })
});