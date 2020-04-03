import {RegexpUtil} from "../util/regexp-util.js";
import {ChatMessageProcessor} from "./chat-message-processor.js";
import {DateChangeMessageProcessor} from "./date-change-message-processor.js";

function MessageProcessor(msgStr) {
    const CHAT_MSG_PREFIX_REGEXP = ChatMessageProcessor.getMessagePrefixRegexp();
    const DATE_CHANGE_MSG_PREFIX_REGEXP = DateChangeMessageProcessor.getMessagePrefixRegexp();
    
    this.getMessageProcessors = function() {
        const regexpOfPrefixes = getRegexpOfPrefixes();
        
        const prefixes = msgStr.match(regexpOfPrefixes);
        const contents = msgStr.split(regexpOfPrefixes).filter(x => x).map(x => x.trim());
        console.assert(prefixes.length == contents.length, `prefixes #(${prefixes.length}) != contents #(${contents.length})`);
        
        const processors = prefixes.reduce((result, prefix, index) => {
            if(CHAT_MSG_PREFIX_REGEXP.test(prefix)) {
                result.push(new ChatMessageProcessor(prefix, contents[index]));
            }
            else if(DATE_CHANGE_MSG_PREFIX_REGEXP.test(prefix)) {
                result.push(new DateChangeMessageProcessor(prefix));
            }
            else {
                throw `Invalid message prefix: [${prefix}]`;
            }
            return result;
        }, []);
        
        return processors;
    };
    
    function getRegexpOfPrefixes() {
        return new RegExp(CHAT_MSG_PREFIX_REGEXP.source + '|' + DATE_CHANGE_MSG_PREFIX_REGEXP.source, "g");
    }
}

export {
    MessageProcessor
};