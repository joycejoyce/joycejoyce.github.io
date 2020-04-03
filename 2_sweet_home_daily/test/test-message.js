import {expect, loadHTML} from "./common-func-for-tests.js";
import {ChatMessageProcessor} from "../scripts/src/type/message-related-types/chat-message-processor.js";
import {DateChangeMessageProcessor} from "../scripts/src/type/message-related-types/date-change-message-processor.js";
import {MessageProcessor} from "../scripts/src/type/message-related-types/message-processor.js";

const chatPrefix = "22:55 victor";
const chatContent = `小螞蟻玩水
玩得好高興!!`;

const dateChangePrefix = "2020.02.14";

const msgStr = `22:55 victor 小螞蟻玩水玩得好高興!!
2020.02.14 星期二
23:01 阿羊 阿公阿嬤陪伴！！
爸爸媽媽的愛
幸福的小螞蟻`;

beforeEach(loadHTML);

describe(`new ChatMessageProcessor(prefix, content)`, function() {
    it(`return a ChatMessageProcessor`, function() {
        const messageProcessor = new ChatMessageProcessor(chatPrefix, chatContent);
        checkIsChatMessageProcessor(messageProcessor);
    })
})

function checkIsChatMessageProcessor(messageProcessor) {
    expect(messageProcessor instanceof ChatMessageProcessor).to.be.true;
    expect(messageProcessor instanceof DateChangeMessageProcessor).to.be.false;
}

describe(`(ChatMessageProcessor)getDom()`, function() {
    it(`return a DOM of the ChatMessage`, function() {
        const messageProcessor = new ChatMessageProcessor(chatPrefix, chatContent); 
        const dom = messageProcessor.getDom();
        //console.log("outerHTML = [" + dom.outerHTML + "]");
        const expectedOuterHTML = `<div class="message"><img class="member-icon" src="./images/member_icon/victor.png">  <span class="timestamp">22:55</span><br>${chatContent}</div>`;
        expect(dom.outerHTML).to.eql(expectedOuterHTML);
    })
})

describe(`ChatMessageProcessor.getMessagePrefixRegexp()`, function() {
    it(`return the RegExp of ChatMessage prefix`, function() {
        const regexp = ChatMessageProcessor.getMessagePrefixRegexp();
        expect(regexp.test(chatPrefix)).to.eql(true);
        expect(regexp.test("22:55 victox")).to.eql(false);
        expect(regexp.test(" victor")).to.eql(false);
        expect(regexp.test(": victor")).to.eql(false);
        expect(regexp.test("2:5 victor")).to.eql(false);
    })
})

describe(`new DateChangeMessageProcessor(prefix, content)`, function() {
    it(`return a DateChangeMessageProcessor`, function() {
        const messageProcessor = new DateChangeMessageProcessor(dateChangePrefix);
        checkIsDateChangeMessageProcessor(messageProcessor);
    })
})

function checkIsDateChangeMessageProcessor(messageProcessor) {
    expect(messageProcessor instanceof DateChangeMessageProcessor).to.be.true;
    expect(messageProcessor instanceof ChatMessageProcessor).to.be.false;
}

describe(`(DateChangeMessageProcessor)getMessage()`, function() {
    it(`return a date-change object`, function() {
        const messageProcessor = new DateChangeMessageProcessor(dateChangePrefix);
        let message = messageProcessor.getMessage();
        let expectedMessage = {
            dateChange: "2020/02/14"
        };
        expect(message).to.eql(expectedMessage);
    })
})

describe(`(DateChangeMessageProcessor)getDom()`, function() {
    it(`return a DOM of the date-change message`, function() {
        const messageProcessor = new DateChangeMessageProcessor(dateChangePrefix);
        let dom = messageProcessor.getDom();
        const expectedOuterHTML = `<div class="date-change">2020/02/14</div>`;
        expect(dom.outerHTML).to.eql(expectedOuterHTML);
    })
})

describe(`DateChangeMessageProcessor.getMessagePrefixRegexp()`, function() {
    it(`return the RegExp of DateChangeMessage prefix`, function() {
        const regexp = DateChangeMessageProcessor.getMessagePrefixRegexp();
        expect(regexp.test(dateChangePrefix)).to.eql(true);
        expect(regexp.test("202.0.1")).to.eql(false);
        expect(regexp.test("2020/02/14")).to.eql(false);
    })
})

describe(`new MessageProcessor(msgStr)`, function() {
    it(`return a MessageProcessor`, function() {
        const messageProcessor = new MessageProcessor(msgStr);
        checkIsMessageProcessor(messageProcessor);
    })
})

function checkIsMessageProcessor(messageProcessor) {
    expect(messageProcessor instanceof MessageProcessor).to.be.true;
    expect(messageProcessor instanceof ChatMessageProcessor).to.be.false;
    expect(messageProcessor instanceof DateChangeMessageProcessor).to.be.false;
}

describe(`(MessageProcessor)getMessageProcessors()`, function() {
    it(`return the message processors`, function() {
        const messageProcessor = new MessageProcessor(msgStr);
        const messageProcessors = messageProcessor.getMessageProcessors();
        expect(messageProcessors.length).to.eql(3);
        checkIsChatMessageProcessor(messageProcessors[0]);
        checkIsDateChangeMessageProcessor(messageProcessors[1]);
        checkIsChatMessageProcessor(messageProcessors[2]);
    })
})