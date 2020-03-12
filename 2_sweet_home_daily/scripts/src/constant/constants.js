const HTML_ID_TITLE = "title";
const HTML_ID_DATE = "date";
const HTML_ID_TEXT_PART = "text-part";
const HTML_ID_MEDIA_PART = "media-part";
const HTML_ID_CHAT_CONTAINER = "chat-container";
const HTML_ID_HEADER_CONTAINER = "header-container";
const HTML_ID_MAIN = "main";

const HTML_CLASS_TIMESTAMP = "timestamp";
const HTML_CLASS_MEMBER_ICON = "member_icon";
const HTML_CLASS_MESSAGE = "message";
const HTML_CLASS_DATE_CHANGE = "date-change";
const HTML_CLASS_CHAT_ITEM = "chat-item";
const HTML_CLASS_HEADER_ITEM = "header-item";

const HTML_PROPERTY_TAG_NAME = "tagName";
const HTML_PROPERTY_ID = "id";
const HTML_PROPERTY_CLASS_NAME = "className";

const HTML_TAG_NAME_SPAN = "SPAN";
const HTML_TAG_NAME_IMG = "IMG";
const HTML_TAG_NAME_DIV = "DIV";
const HTML_TAG_NAME_BR = "BR";

const SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP = "  ";

const MONTH_NAME =
      ["January", "February", "March",
        "April", "May", "June",
        "July", "August", "September",
        "October", "November", "December"
      ];

const MSG_TYPE_MEMBER_CHAT = "MEMBER_CHAT";
const MSG_TYPE_DATE_CHANGE = "DATE_CHANGE";

const ERR_INVALID_MESSAGE_TYPE = "Invalid message type";
const ERR_INVALID_MESSAGE_PREFIX = "Invalid message prefix";
const ERR_LENGTHES_NOT_EUQAL = "Lengthes not equal";
const ERR_ASSERT_FAIL = "Assert fail";

export {
    MSG_TYPE_MEMBER_CHAT,
    MSG_TYPE_DATE_CHANGE,
    MONTH_NAME,
    ERR_INVALID_MESSAGE_PREFIX,
    ERR_ASSERT_FAIL,
    HTML_ID_TITLE,
    HTML_ID_DATE,
    HTML_ID_TEXT_PART,
    HTML_ID_MEDIA_PART,
    HTML_ID_CHAT_CONTAINER,
    HTML_ID_HEADER_CONTAINER,
    HTML_ID_MAIN,
    HTML_CLASS_TIMESTAMP,
    HTML_CLASS_MEMBER_ICON,
    HTML_CLASS_MESSAGE,
    HTML_CLASS_DATE_CHANGE,
    HTML_CLASS_CHAT_ITEM,
    HTML_CLASS_HEADER_ITEM,
    HTML_TAG_NAME_SPAN,
    HTML_TAG_NAME_IMG,
    HTML_TAG_NAME_DIV,
    HTML_TAG_NAME_BR,
    HTML_PROPERTY_TAG_NAME,
    HTML_PROPERTY_ID,
    HTML_PROPERTY_CLASS_NAME,
    SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP
};