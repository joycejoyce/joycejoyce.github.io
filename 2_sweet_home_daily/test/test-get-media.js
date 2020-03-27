Object.entries(require('./common-func-for-tests.js')).forEach(([name, imported]) => global[name] = imported);

const dateAndNum = "20200214-2";

describe("DAILY_MEDIA_TYPE[${dateAndNum}]", function() {
   it("should be ${MEDIA_TYPE_ONE_IMAGE}", function() {
       assert.equal(DAILY_MEDIA_TYPE[dateAndNum], MEDIA_TYPE_ONE_IMAGE);
   })
});

describe("DAILY_MEDIA_SOURCE[${dateAndNum}]", function() {
    it("should be [\"S__43147276.jpg\"]", function() {
        expect(DAILY_MEDIA_SOURCE[dateAndNum]).to.eql(["S__43147276.jpg"]);
    })
});

describe("DateAndNumParser.getDate(${dateAndNum})", function() {
    it("should be \"20200214\"", function() {
        assert.equal(DateAndNumParser.getDate(dateAndNum), "20200214");
    })
});

describe("Media.getSrcFolder(${dateAndNum})", function() {
    it(`should be "${RESOURCE_FILES_LOCATION}/2020/02/14/2"`, function() {
        assert.equal(Media.getSrcFolder(dateAndNum), `${RESOURCE_FILES_LOCATION}/2020/02/14/2`);
    })
});

describe("Media.getSrcFilePaths(${dateAndNum})", function() {
    it(`should be ["${RESOURCE_FILES_LOCATION}/2020/02/14/2/S__43147276.jpg"]`, function() {
        let srcFilePaths = Media.getSrcFilePaths(dateAndNum);
        expect(srcFilePaths).to.eql([`${RESOURCE_FILES_LOCATION}/2020/02/14/2/S__43147276.jpg`]);
    })
});

describe("media.type of ${dateAndNum}", function() {
    it("should be ${MEDIA_TYPE_ONE_IMAGE}", function() {
        let media = Media.getInstance(dateAndNum);
        assert.equal(media.type, MEDIA_TYPE_ONE_IMAGE);
    })
});

describe("media.src of ${dateAndNum}", function() {
    it(`should be ["${RESOURCE_FILES_LOCATION}/2020/02/14/2/S__43147276.jpg"]`, function() {
        let media = Media.getInstance(dateAndNum);
        expect(media.src).to.eql(`${RESOURCE_FILES_LOCATION}/2020/02/14/2/S__43147276.jpg`);
    })
});

describe("DailyLINE.media.type of ${dateAndNum}", function() {
    it("should be ${MEDIA_TYPE_ONE_IMAGE}", function() {
        let media = Media.getInstance(dateAndNum);
        expect(media.type).to.eql(MEDIA_TYPE_ONE_IMAGE);
    })
});

describe("DailyLINE.media.src of 20200214-2", function() {
    it(`should be ["${RESOURCE_FILES_LOCATION}/2020/02/14/2/S__43147276.jpg"]`, function() {
        let dailyLINE = new DailyLINE("20200214-2");
        let media = dailyLINE.media;
        expect(media.src).to.eql(`${RESOURCE_FILES_LOCATION}/2020/02/14/2/S__43147276.jpg`);
    })
});