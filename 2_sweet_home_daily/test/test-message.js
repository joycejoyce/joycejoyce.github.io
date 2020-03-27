Object.entries(require('./common-func-for-tests.js')).forEach(([name, imported]) => global[name] = imported);
Object.entries(require('../scripts/src/type/message-related-types/chat-message-processor.js')).forEach(([name, imported]) => global[name] = imported);

const PREFIX = "22:55 victor";
const CONTENT = `小螞蟻玩水
玩得好高興!!`;
let chatMessageProcessor = new ChatMessageProcessor(PREFIX, CONTENT);

beforeEach(loadHTML);

describe(`(ChatMessageProcessor)getMessage()`, function() {
    it(`return a ChatMessage`, function() {
        let message = chatMessageProcessor.getMessage();
        let expectedMessage = {
            memberIconSrc: "./images/member_icon/victor.png",
            timestamp: "22:55",
            chatContent: CONTENT
        };
        expect(message).to.eql(expectedMessage);
    })
});

describe(`(ChatMessageProcessor)getDom()`, function() {
    it(`return a DOM of the chat message`, function() {
        let dom = chatMessageProcessor.getDom();
        console.log("outerHTML = [" + dom.outerHTML + "]");
        let message = chatMessageProcessor.getMessage();
        const expectedOuterHTML = `<div class="message"><img class="member_icon" src="${message.memberIconSrc}">  <span class="timestamp">${message.timestamp}</span><br>${message.chatContent}</div>`;
        expect(dom.outerHTML).to.eql(expectedOuterHTML);
    })
});