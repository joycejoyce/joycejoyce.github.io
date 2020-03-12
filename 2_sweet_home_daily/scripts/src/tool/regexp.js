import {MEMBER_NAME_MAPPING} from '../constant/line-constants.js';

function RegExpGenerator() {}
RegExpGenerator.genMsgPrefixOfMemberChatRegExp = function() {
    let regExpStr = Object.keys(MEMBER_NAME_MAPPING).join("|" + REGEXP_LINE_TIMESTAMP.source + "\\s");
    regExpStr = REGEXP_LINE_TIMESTAMP.source + "\\s" + regExpStr;
    return new RegExp(regExpStr, 'g');
}
RegExpGenerator.genMemberNameRegExp = function() {
    return new RegExp(Object.keys(MEMBER_NAME_MAPPING).join("|"), 'g');
}

const REGEXP_DATE_AND_NUM_DELIMITER = new RegExp('-', 'g');
const REGEXP_LINE_DATE_CHANGE_DELIMITER = new RegExp('\\.', 'g');
const REGEXP_LINE_TIMESTAMP = new RegExp('\\d{2}:\\d{2}', 'g');
const REGEXP_LINE_MEMBER_NAME = RegExpGenerator.genMemberNameRegExp();
const REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT = RegExpGenerator.genMsgPrefixOfMemberChatRegExp();
const REGEXP_LINE_MSG_PREFIX_DATE_CHANGE = new RegExp('\\d{4}\\.\\d{2}\\.\\d{2}', 'g');
const REGEXP_LINE_MSG_PREFIX_ALL = new RegExp(REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.source + "|" + REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.source, 'g');

export {
    REGEXP_DATE_AND_NUM_DELIMITER,
    REGEXP_LINE_MSG_PREFIX_ALL,
    REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT,
    REGEXP_LINE_MSG_PREFIX_DATE_CHANGE,
    REGEXP_LINE_MEMBER_NAME,
    REGEXP_LINE_TIMESTAMP,
    REGEXP_LINE_DATE_CHANGE_DELIMITER
};