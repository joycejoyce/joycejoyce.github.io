import {RegexpUtil} from "../util/regexp-util.js";
import {ChatMessageProcessor} from "./chat-message-processor.js";
import {DateChangeMessageProcessor} from "./date-change-message-processor.js";

function MessageProcessor(dateAndNum) {
    const msgStr = getMsgStr(dateAndNum);
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
    
    function getMsgStr(dateAndNum) {
        const DAILY_MESSAGE = {
            "20190822-1": `21:27 jim 這個小橘胖～～～跟小法一樣愛跳舞
姊姊你們家好暖色系哦！
冬天帶同伴去你們家煮火鍋～～
21:30 frank 撒嬌又撒野的小肥橘!
21:39 amy 小橘有一個悠遊自在的私人空間
很可愛喔！`,
            "20190822-2": `21:49 amy 東躲西藏
我就不想回家啦！
21:50 阿羊 小法跟我小時候最愛躲的地方一樣..
跟姊姊玩躲貓貓的時候我都會去躲媽媽衣櫃
印象就是媽媽每次穿很美麗的長裙(深色的碎花裙)`,
            "20200214-2": `22:55 victor 小螞蟻玩水玩得好高興!!
2020.02.18 星期二
23:01 阿羊 阿公阿嬤陪伴！！
爸爸媽媽的愛
幸福的小螞蟻`
        };
        
        return DAILY_MESSAGE[dateAndNum];
    }
    
    function getRegexpOfPrefixes() {
        return new RegExp(CHAT_MSG_PREFIX_REGEXP.source + '|' + DATE_CHANGE_MSG_PREFIX_REGEXP.source, "g");
    }
}

export {
    MessageProcessor
};