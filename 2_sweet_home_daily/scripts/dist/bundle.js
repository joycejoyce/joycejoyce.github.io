var MyModule =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./scripts/src/type/html-generator.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./node_modules/webpack/buildin/global.js":
/*!***********************************!*\
  !*** (webpack)/buildin/global.js ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("var g;\n\n// This works in non-strict mode\ng = (function() {\n\treturn this;\n})();\n\ntry {\n\t// This works if eval is allowed (see CSP)\n\tg = g || new Function(\"return this\")();\n} catch (e) {\n\t// This works if the window reference is available\n\tif (typeof window === \"object\") g = window;\n}\n\n// g can still be undefined, but nothing to do about it...\n// We return undefined, instead of nothing here, so it's\n// easier to handle this case. if(!global) { ...}\n\nmodule.exports = g;\n\n\n//# sourceURL=webpack://MyModule/(webpack)/buildin/global.js?");

/***/ }),

/***/ "./scripts/src/constant/constants.js":
/*!*******************************************!*\
  !*** ./scripts/src/constant/constants.js ***!
  \*******************************************/
/*! exports provided: EVENT_ON_CLICK, CSS_NAME_DISPLAY, CSS_NAME_GRID_TEMPLATE_COLUMNS, CSS_NAME_COLUMN_GAP, CSS_NAME_ROW_GAP, CSS_VALUE_GRID, CSS_VALUE_1FR_7FR, CSS_VALUE_0PX, CSS_VALUE_10PX, MSG_TYPE_MEMBER_CHAT, MSG_TYPE_DATE_CHANGE, MONTH_NAME, ERR_INVALID_MESSAGE_PREFIX, ERR_INVALID_MEDIA_TYPE, ERR_ASSERT_FAIL, HTML_ELEMENT_BODY, HTML_ID_TITLE, HTML_ID_DATE, HTML_ID_TEXT_PART, HTML_ID_ONE_IMG_MEDIA_PART, HTML_ID_MULTI_IMG_MEDIA_PART, HTML_ID_ONE_VIDEO_MEDIA_PART, HTML_ID_CHAT_CONTAINER, HTML_ID_HEADER_CONTAINER, HTML_ID_MAIN, HTML_ID_SHRINK_IMGS, HTML_ID_EXPAND_IMG, HTML_ID_SHRINK_AND_EXPAND_IMGS, HTML_CLASS_TIMESTAMP, HTML_CLASS_MEMBER_ICON, HTML_CLASS_MESSAGE, HTML_CLASS_DATE_CHANGE, HTML_CLASS_CHAT_ITEM, HTML_CLASS_HEADER_ITEM, HTML_CLASS_SHRINK_IMG, HTML_CLASS_CURRENT_IMG, HTML_TAG_NAME_SPAN, HTML_TAG_NAME_IMG, HTML_TAG_NAME_DIV, HTML_TAG_NAME_BR, HTML_TAG_NAME_VIDEO, HTML_TAG_NAME_SOURCE, JQUERY_DATA_ATTRIBUTE_VALUE, HTML_PROPERTY_TAG_NAME, HTML_PROPERTY_ID, HTML_PROPERTY_CLASS_NAME, HTML_PROPERTY_SRC, HTML_PROPERTY_INNER_HTML, HTML_PROPERTY_DATA_VALUE, HTML_PROPERTY_CONTROLS, HTML_PROPERTY_TYPE, SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP, IS_CLICKED, VIDEO_FORMAT_PREFIX */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"EVENT_ON_CLICK\", function() { return EVENT_ON_CLICK; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_NAME_DISPLAY\", function() { return CSS_NAME_DISPLAY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_NAME_GRID_TEMPLATE_COLUMNS\", function() { return CSS_NAME_GRID_TEMPLATE_COLUMNS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_NAME_COLUMN_GAP\", function() { return CSS_NAME_COLUMN_GAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_NAME_ROW_GAP\", function() { return CSS_NAME_ROW_GAP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_VALUE_GRID\", function() { return CSS_VALUE_GRID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_VALUE_1FR_7FR\", function() { return CSS_VALUE_1FR_7FR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_VALUE_0PX\", function() { return CSS_VALUE_0PX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"CSS_VALUE_10PX\", function() { return CSS_VALUE_10PX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MSG_TYPE_MEMBER_CHAT\", function() { return MSG_TYPE_MEMBER_CHAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MSG_TYPE_DATE_CHANGE\", function() { return MSG_TYPE_DATE_CHANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MONTH_NAME\", function() { return MONTH_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERR_INVALID_MESSAGE_PREFIX\", function() { return ERR_INVALID_MESSAGE_PREFIX; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERR_INVALID_MEDIA_TYPE\", function() { return ERR_INVALID_MEDIA_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"ERR_ASSERT_FAIL\", function() { return ERR_ASSERT_FAIL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ELEMENT_BODY\", function() { return HTML_ELEMENT_BODY; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_TITLE\", function() { return HTML_ID_TITLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_DATE\", function() { return HTML_ID_DATE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_TEXT_PART\", function() { return HTML_ID_TEXT_PART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_ONE_IMG_MEDIA_PART\", function() { return HTML_ID_ONE_IMG_MEDIA_PART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_MULTI_IMG_MEDIA_PART\", function() { return HTML_ID_MULTI_IMG_MEDIA_PART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_ONE_VIDEO_MEDIA_PART\", function() { return HTML_ID_ONE_VIDEO_MEDIA_PART; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_CHAT_CONTAINER\", function() { return HTML_ID_CHAT_CONTAINER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_HEADER_CONTAINER\", function() { return HTML_ID_HEADER_CONTAINER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_MAIN\", function() { return HTML_ID_MAIN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_SHRINK_IMGS\", function() { return HTML_ID_SHRINK_IMGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_EXPAND_IMG\", function() { return HTML_ID_EXPAND_IMG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_ID_SHRINK_AND_EXPAND_IMGS\", function() { return HTML_ID_SHRINK_AND_EXPAND_IMGS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_TIMESTAMP\", function() { return HTML_CLASS_TIMESTAMP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_MEMBER_ICON\", function() { return HTML_CLASS_MEMBER_ICON; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_MESSAGE\", function() { return HTML_CLASS_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_DATE_CHANGE\", function() { return HTML_CLASS_DATE_CHANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_CHAT_ITEM\", function() { return HTML_CLASS_CHAT_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_HEADER_ITEM\", function() { return HTML_CLASS_HEADER_ITEM; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_SHRINK_IMG\", function() { return HTML_CLASS_SHRINK_IMG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_CLASS_CURRENT_IMG\", function() { return HTML_CLASS_CURRENT_IMG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_TAG_NAME_SPAN\", function() { return HTML_TAG_NAME_SPAN; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_TAG_NAME_IMG\", function() { return HTML_TAG_NAME_IMG; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_TAG_NAME_DIV\", function() { return HTML_TAG_NAME_DIV; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_TAG_NAME_BR\", function() { return HTML_TAG_NAME_BR; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_TAG_NAME_VIDEO\", function() { return HTML_TAG_NAME_VIDEO; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_TAG_NAME_SOURCE\", function() { return HTML_TAG_NAME_SOURCE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"JQUERY_DATA_ATTRIBUTE_VALUE\", function() { return JQUERY_DATA_ATTRIBUTE_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_TAG_NAME\", function() { return HTML_PROPERTY_TAG_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_ID\", function() { return HTML_PROPERTY_ID; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_CLASS_NAME\", function() { return HTML_PROPERTY_CLASS_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_SRC\", function() { return HTML_PROPERTY_SRC; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_INNER_HTML\", function() { return HTML_PROPERTY_INNER_HTML; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_DATA_VALUE\", function() { return HTML_PROPERTY_DATA_VALUE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_CONTROLS\", function() { return HTML_PROPERTY_CONTROLS; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"HTML_PROPERTY_TYPE\", function() { return HTML_PROPERTY_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP\", function() { return SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"IS_CLICKED\", function() { return IS_CLICKED; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"VIDEO_FORMAT_PREFIX\", function() { return VIDEO_FORMAT_PREFIX; });\nvar EVENT_ON_CLICK = \"onClick\";\nvar CSS_NAME_DISPLAY = \"display\";\nvar CSS_NAME_GRID_TEMPLATE_COLUMNS = \"grid-template-columns\";\nvar CSS_NAME_COLUMN_GAP = \"column-gap\";\nvar CSS_NAME_ROW_GAP = \"row-gap\";\nvar CSS_VALUE_GRID = \"grid\";\nvar CSS_VALUE_1FR_7FR = \"1fr 7fr\";\nvar CSS_VALUE_0PX = \"0px\";\nvar CSS_VALUE_10PX = \"10px\";\nvar HTML_ELEMENT_BODY = \"body\";\nvar HTML_ID_TITLE = \"title\";\nvar HTML_ID_DATE = \"date\";\nvar HTML_ID_TEXT_PART = \"text-part\";\nvar HTML_ID_ONE_IMG_MEDIA_PART = \"one-img-media-part\";\nvar HTML_ID_MULTI_IMG_MEDIA_PART = \"multi-img-media-part\";\nvar HTML_ID_ONE_VIDEO_MEDIA_PART = \"one-video-media-part\";\nvar HTML_ID_CHAT_CONTAINER = \"chat-container\";\nvar HTML_ID_HEADER_CONTAINER = \"header-container\";\nvar HTML_ID_MAIN = \"main\";\nvar HTML_ID_SHRINK_IMGS = \"shrink-imgs\";\nvar HTML_ID_EXPAND_IMG = \"expand-img\";\nvar HTML_ID_SHRINK_AND_EXPAND_IMGS = \"shrink-and-expand-imgs\";\nvar HTML_CLASS_TIMESTAMP = \"timestamp\";\nvar HTML_CLASS_MEMBER_ICON = \"member_icon\";\nvar HTML_CLASS_MESSAGE = \"message\";\nvar HTML_CLASS_DATE_CHANGE = \"date-change\";\nvar HTML_CLASS_CHAT_ITEM = \"chat-item\";\nvar HTML_CLASS_HEADER_ITEM = \"header-item\";\nvar HTML_CLASS_SHRINK_IMG = \"shrink-img\";\nvar HTML_CLASS_CURRENT_IMG = \"current-img\";\nvar HTML_PROPERTY_TAG_NAME = \"tagName\";\nvar HTML_PROPERTY_ID = \"id\";\nvar HTML_PROPERTY_CLASS_NAME = \"className\";\nvar HTML_PROPERTY_SRC = \"src\";\nvar HTML_PROPERTY_INNER_HTML = \"innerHTML\";\nvar HTML_PROPERTY_DATA_VALUE = \"data-value\";\nvar HTML_PROPERTY_CONTROLS = \"controls\";\nvar HTML_PROPERTY_TYPE = \"type\";\nvar HTML_TAG_NAME_SPAN = \"SPAN\";\nvar HTML_TAG_NAME_IMG = \"IMG\";\nvar HTML_TAG_NAME_DIV = \"DIV\";\nvar HTML_TAG_NAME_BR = \"BR\";\nvar HTML_TAG_NAME_VIDEO = \"VIDEO\";\nvar HTML_TAG_NAME_SOURCE = \"SOURCE\";\nvar JQUERY_DATA_ATTRIBUTE_VALUE = \"value\";\nvar SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP = \"  \";\nvar IS_CLICKED = \"isClicked\";\nvar VIDEO_FORMAT_PREFIX = \"video/\";\nvar MONTH_NAME = [\"January\", \"February\", \"March\", \"April\", \"May\", \"June\", \"July\", \"August\", \"September\", \"October\", \"November\", \"December\"];\nvar MSG_TYPE_MEMBER_CHAT = \"MEMBER_CHAT\";\nvar MSG_TYPE_DATE_CHANGE = \"DATE_CHANGE\";\nvar ERR_INVALID_MESSAGE_TYPE = \"Invalid message type\";\nvar ERR_INVALID_MESSAGE_PREFIX = \"Invalid message prefix\";\nvar ERR_INVALID_MEDIA_TYPE = \"Invalid media type\";\nvar ERR_LENGTHES_NOT_EUQAL = \"Lengthes not equal\";\nvar ERR_ASSERT_FAIL = \"Assert fail\";\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/constant/constants.js?");

/***/ }),

/***/ "./scripts/src/constant/line-constants.js":
/*!************************************************!*\
  !*** ./scripts/src/constant/line-constants.js ***!
  \************************************************/
/*! exports provided: RESOURCE_FILES_LOCATION, MEMBER_NAME_MAPPING, MEMBER_ICON_LOCATION, MEMBER_ICON_EXTENTION, DAILY_TITLE, DAILY_MESSAGE, DAILY_MEDIA_TYPE, DAILY_MEDIA_SOURCE, MEDIA_TYPE_ONE_IMAGE, MEDIA_TYPE_MULTI_IMAGE, MEDIA_TYPE_ONE_VIDEO */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"RESOURCE_FILES_LOCATION\", function() { return RESOURCE_FILES_LOCATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEMBER_NAME_MAPPING\", function() { return MEMBER_NAME_MAPPING; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEMBER_ICON_LOCATION\", function() { return MEMBER_ICON_LOCATION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEMBER_ICON_EXTENTION\", function() { return MEMBER_ICON_EXTENTION; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAILY_TITLE\", function() { return DAILY_TITLE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAILY_MESSAGE\", function() { return DAILY_MESSAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAILY_MEDIA_TYPE\", function() { return DAILY_MEDIA_TYPE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DAILY_MEDIA_SOURCE\", function() { return DAILY_MEDIA_SOURCE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEDIA_TYPE_ONE_IMAGE\", function() { return MEDIA_TYPE_ONE_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEDIA_TYPE_MULTI_IMAGE\", function() { return MEDIA_TYPE_MULTI_IMAGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MEDIA_TYPE_ONE_VIDEO\", function() { return MEDIA_TYPE_ONE_VIDEO; });\nvar RESOURCE_FILES_LOCATION = \"./images\";\nvar MEMBER_ICON_LOCATION = RESOURCE_FILES_LOCATION + \"/member_icon/\";\nvar MEMBER_ICON_EXTENTION = \".png\";\nvar MEMBER_NAME_MAPPING = {\n  \"許天亮\": \"frank\",\n  \"frank\": \"frank\",\n  \"美燕\": \"amy\",\n  \"amy\": \"amy\",\n  \"victor\": \"victor\",\n  \"dorith1989\": \"dorith\",\n  \"阿羊\": \"jim\",\n  \"jim\": \"jim\"\n};\nvar DAILY_TITLE = {\n  \"20190822-1\": \"小肥橘\",\n  \"20190822-2\": \"小法\",\n  \"20200214-2\": \"小螞蟻玩水\"\n};\nvar DAILY_MESSAGE = {\n  \"20190822-1\": \"21:27 jim \\u9019\\u500B\\u5C0F\\u6A58\\u80D6\\uFF5E\\uFF5E\\uFF5E\\u8DDF\\u5C0F\\u6CD5\\u4E00\\u6A23\\u611B\\u8DF3\\u821E\\n\\u59CA\\u59CA\\u4F60\\u5011\\u5BB6\\u597D\\u6696\\u8272\\u7CFB\\u54E6\\uFF01\\n\\u51AC\\u5929\\u5E36\\u540C\\u4F34\\u53BB\\u4F60\\u5011\\u5BB6\\u716E\\u706B\\u934B\\uFF5E\\uFF5E\\n21:30 frank \\u6492\\u5B0C\\u53C8\\u6492\\u91CE\\u7684\\u5C0F\\u80A5\\u6A58!\\n21:39 amy \\u5C0F\\u6A58\\u6709\\u4E00\\u500B\\u60A0\\u904A\\u81EA\\u5728\\u7684\\u79C1\\u4EBA\\u7A7A\\u9593\\n\\u5F88\\u53EF\\u611B\\u5594\\uFF01\",\n  \"20190822-2\": \"21:49 amy \\u6771\\u8EB2\\u897F\\u85CF\\n\\u6211\\u5C31\\u4E0D\\u60F3\\u56DE\\u5BB6\\u5566\\uFF01\\n21:50 \\u963F\\u7F8A \\u5C0F\\u6CD5\\u8DDF\\u6211\\u5C0F\\u6642\\u5019\\u6700\\u611B\\u8EB2\\u7684\\u5730\\u65B9\\u4E00\\u6A23..\\n\\u8DDF\\u59CA\\u59CA\\u73A9\\u8EB2\\u8C93\\u8C93\\u7684\\u6642\\u5019\\u6211\\u90FD\\u6703\\u53BB\\u8EB2\\u5ABD\\u5ABD\\u8863\\u6AC3\\n\\u5370\\u8C61\\u5C31\\u662F\\u5ABD\\u5ABD\\u6BCF\\u6B21\\u7A7F\\u5F88\\u7F8E\\u9E97\\u7684\\u9577\\u88D9(\\u6DF1\\u8272\\u7684\\u788E\\u82B1\\u88D9)\",\n  \"20200214-2\": \"22:55 victor \\u5C0F\\u879E\\u87FB\\u73A9\\u6C34\\u73A9\\u5F97\\u597D\\u9AD8\\u8208!!\\n2020.02.18 \\u661F\\u671F\\u4E8C\\n23:01 \\u963F\\u7F8A \\u963F\\u516C\\u963F\\u5B24\\u966A\\u4F34\\uFF01\\uFF01\\n\\u7238\\u7238\\u5ABD\\u5ABD\\u7684\\u611B\\n\\u5E78\\u798F\\u7684\\u5C0F\\u879E\\u87FB\"\n};\nvar MEDIA_TYPE_ONE_IMAGE = \"ONE_IMAGE\";\nvar MEDIA_TYPE_MULTI_IMAGE = \"MULTI_IMAGE\";\nvar MEDIA_TYPE_ONE_VIDEO = \"ONE_VIDEO\";\nvar DAILY_MEDIA_TYPE = {\n  \"20190822-1\": MEDIA_TYPE_ONE_VIDEO,\n  \"20190822-2\": MEDIA_TYPE_MULTI_IMAGE,\n  \"20200214-2\": MEDIA_TYPE_ONE_IMAGE\n};\nvar DAILY_MEDIA_SOURCE = {\n  \"20190822-1\": [\"588172451.952125.mp4\"],\n  \"20190822-2\": [\"17201.jpg\", \"17202.jpg\", \"17203.jpg\", \"17204.jpg\", \"17205.jpg\"],\n  \"20200214-2\": [\"S__43147276.jpg\"]\n};\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/constant/line-constants.js?");

/***/ }),

/***/ "./scripts/src/tool/exception.js":
/*!***************************************!*\
  !*** ./scripts/src/tool/exception.js ***!
  \***************************************/
/*! exports provided: Exception, MessageFormatException */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Exception\", function() { return Exception; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageFormatException\", function() { return MessageFormatException; });\nfunction MessageFormatException(error, originalMessage) {\n  this.error = error;\n  this.originalMessage = originalMessage;\n}\n\nfunction Exception(error) {\n  this.error = error;\n}\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/tool/exception.js?");

/***/ }),

/***/ "./scripts/src/tool/import-files.js":
/*!******************************************!*\
  !*** ./scripts/src/tool/import-files.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("/* WEBPACK VAR INJECTION */(function(global) {function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }\n\nfunction _nonIterableRest() { throw new TypeError(\"Invalid attempt to destructure non-iterable instance\"); }\n\nfunction _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === \"[object Arguments]\")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i[\"return\"] != null) _i[\"return\"](); } finally { if (_d) throw _e; } } return _arr; }\n\nfunction _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }\n\nvar IMPORT_TYPE_ES6 = \"ES6\";\nvar IMPORT_TYPE_COMMON_JS = \"CommonJS\";\n\nfunction doImport(importType) {\n  var ary = [];\n\n  if (importType == IMPORT_TYPE_ES6) {\n    ary = window;\n  } else if (importType == IMPORT_TYPE_COMMON_JS) {\n    ary = global;\n  } else {\n    console.error(\"Invalid importType: \" + importType);\n    return;\n  }\n\n  importConstants(ary);\n  importTools(ary);\n  importTypes(ary);\n}\n\nfunction importConstants(ary) {\n  Object.entries(__webpack_require__(/*! ../constant/constants.js */ \"./scripts/src/constant/constants.js\")).forEach(function (_ref) {\n    var _ref2 = _slicedToArray(_ref, 2),\n        name = _ref2[0],\n        imported = _ref2[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../constant/line-constants.js */ \"./scripts/src/constant/line-constants.js\")).forEach(function (_ref3) {\n    var _ref4 = _slicedToArray(_ref3, 2),\n        name = _ref4[0],\n        imported = _ref4[1];\n\n    return ary[name] = imported;\n  });\n}\n\nfunction importTools(ary) {\n  Object.entries(__webpack_require__(/*! ../tool/exception.js */ \"./scripts/src/tool/exception.js\")).forEach(function (_ref5) {\n    var _ref6 = _slicedToArray(_ref5, 2),\n        name = _ref6[0],\n        imported = _ref6[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../tool/regexp.js */ \"./scripts/src/tool/regexp.js\")).forEach(function (_ref7) {\n    var _ref8 = _slicedToArray(_ref7, 2),\n        name = _ref8[0],\n        imported = _ref8[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../tool/tool.js */ \"./scripts/src/tool/tool.js\")).forEach(function (_ref9) {\n    var _ref10 = _slicedToArray(_ref9, 2),\n        name = _ref10[0],\n        imported = _ref10[1];\n\n    return ary[name] = imported;\n  });\n}\n\nfunction importTypes(ary) {\n  Object.entries(__webpack_require__(/*! ../type/html-generator.js */ \"./scripts/src/type/html-generator.js\")).forEach(function (_ref11) {\n    var _ref12 = _slicedToArray(_ref11, 2),\n        name = _ref12[0],\n        imported = _ref12[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/time-formatter.js */ \"./scripts/src/type/time-formatter.js\")).forEach(function (_ref13) {\n    var _ref14 = _slicedToArray(_ref13, 2),\n        name = _ref14[0],\n        imported = _ref14[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/date-and-num-parser.js */ \"./scripts/src/type/date-and-num-parser.js\")).forEach(function (_ref15) {\n    var _ref16 = _slicedToArray(_ref15, 2),\n        name = _ref16[0],\n        imported = _ref16[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/member.js */ \"./scripts/src/type/member.js\")).forEach(function (_ref17) {\n    var _ref18 = _slicedToArray(_ref17, 2),\n        name = _ref18[0],\n        imported = _ref18[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/message-parser.js */ \"./scripts/src/type/message-parser.js\")).forEach(function (_ref19) {\n    var _ref20 = _slicedToArray(_ref19, 2),\n        name = _ref20[0],\n        imported = _ref20[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/daily-line.js */ \"./scripts/src/type/daily-line.js\")).forEach(function (_ref21) {\n    var _ref22 = _slicedToArray(_ref21, 2),\n        name = _ref22[0],\n        imported = _ref22[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/member-chat-dom-generator.js */ \"./scripts/src/type/member-chat-dom-generator.js\")).forEach(function (_ref23) {\n    var _ref24 = _slicedToArray(_ref23, 2),\n        name = _ref24[0],\n        imported = _ref24[1];\n\n    return ary[name] = imported;\n  });\n  importMessageRelatedTypes(ary);\n  importMediaRelatedTypes(ary);\n}\n\nfunction importMessageRelatedTypes(ary) {\n  Object.entries(__webpack_require__(/*! ../type/message-related-types/message.js */ \"./scripts/src/type/message-related-types/message.js\")).forEach(function (_ref25) {\n    var _ref26 = _slicedToArray(_ref25, 2),\n        name = _ref26[0],\n        imported = _ref26[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/message-related-types/date-change-message.js */ \"./scripts/src/type/message-related-types/date-change-message.js\")).forEach(function (_ref27) {\n    var _ref28 = _slicedToArray(_ref27, 2),\n        name = _ref28[0],\n        imported = _ref28[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/message-related-types/member-chat-message.js */ \"./scripts/src/type/message-related-types/member-chat-message.js\")).forEach(function (_ref29) {\n    var _ref30 = _slicedToArray(_ref29, 2),\n        name = _ref30[0],\n        imported = _ref30[1];\n\n    return ary[name] = imported;\n  });\n}\n\nfunction importMediaRelatedTypes(ary) {\n  Object.entries(__webpack_require__(/*! ../type/media-related-types/media.js */ \"./scripts/src/type/media-related-types/media.js\")).forEach(function (_ref31) {\n    var _ref32 = _slicedToArray(_ref31, 2),\n        name = _ref32[0],\n        imported = _ref32[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/media-related-types/one-image-media.js */ \"./scripts/src/type/media-related-types/one-image-media.js\")).forEach(function (_ref33) {\n    var _ref34 = _slicedToArray(_ref33, 2),\n        name = _ref34[0],\n        imported = _ref34[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/media-related-types/multi-image-media.js */ \"./scripts/src/type/media-related-types/multi-image-media.js\")).forEach(function (_ref35) {\n    var _ref36 = _slicedToArray(_ref35, 2),\n        name = _ref36[0],\n        imported = _ref36[1];\n\n    return ary[name] = imported;\n  });\n  Object.entries(__webpack_require__(/*! ../type/media-related-types/one-video-media.js */ \"./scripts/src/type/media-related-types/one-video-media.js\")).forEach(function (_ref37) {\n    var _ref38 = _slicedToArray(_ref37, 2),\n        name = _ref38[0],\n        imported = _ref38[1];\n\n    return ary[name] = imported;\n  });\n}\n\nmodule.exports = {\n  doImport: doImport,\n  IMPORT_TYPE_ES6: IMPORT_TYPE_ES6,\n  IMPORT_TYPE_COMMON_JS: IMPORT_TYPE_COMMON_JS\n};\n/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../node_modules/webpack/buildin/global.js */ \"./node_modules/webpack/buildin/global.js\")))\n\n//# sourceURL=webpack://MyModule/./scripts/src/tool/import-files.js?");

/***/ }),

/***/ "./scripts/src/tool/regexp.js":
/*!************************************!*\
  !*** ./scripts/src/tool/regexp.js ***!
  \************************************/
/*! exports provided: REGEXP_DATE_AND_NUM_DELIMITER, REGEXP_LINE_MSG_PREFIX_ALL, REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT, REGEXP_LINE_MSG_PREFIX_DATE_CHANGE, REGEXP_LINE_MEMBER_NAME, REGEXP_LINE_TIMESTAMP, REGEXP_LINE_DATE_CHANGE_DELIMITER, REGEXP_FOLDER_DELIMITER */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_DATE_AND_NUM_DELIMITER\", function() { return REGEXP_DATE_AND_NUM_DELIMITER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_LINE_MSG_PREFIX_ALL\", function() { return REGEXP_LINE_MSG_PREFIX_ALL; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT\", function() { return REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_LINE_MSG_PREFIX_DATE_CHANGE\", function() { return REGEXP_LINE_MSG_PREFIX_DATE_CHANGE; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_LINE_MEMBER_NAME\", function() { return REGEXP_LINE_MEMBER_NAME; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_LINE_TIMESTAMP\", function() { return REGEXP_LINE_TIMESTAMP; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_LINE_DATE_CHANGE_DELIMITER\", function() { return REGEXP_LINE_DATE_CHANGE_DELIMITER; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"REGEXP_FOLDER_DELIMITER\", function() { return REGEXP_FOLDER_DELIMITER; });\n/* harmony import */ var _constant_line_constants_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../constant/line-constants.js */ \"./scripts/src/constant/line-constants.js\");\n\n\nfunction RegExpGenerator() {}\n\nRegExpGenerator.genMsgPrefixOfMemberChatRegExp = function () {\n  var regExpStr = Object.keys(_constant_line_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"MEMBER_NAME_MAPPING\"]).join(\"|\" + REGEXP_LINE_TIMESTAMP.source + \"\\\\s\");\n  regExpStr = REGEXP_LINE_TIMESTAMP.source + \"\\\\s\" + regExpStr;\n  return new RegExp(regExpStr, 'g');\n};\n\nRegExpGenerator.genMemberNameRegExp = function () {\n  return new RegExp(Object.keys(_constant_line_constants_js__WEBPACK_IMPORTED_MODULE_0__[\"MEMBER_NAME_MAPPING\"]).join(\"|\"), 'g');\n};\n\nvar REGEXP_DATE_AND_NUM_DELIMITER = new RegExp('-', 'g');\nvar REGEXP_LINE_DATE_CHANGE_DELIMITER = new RegExp('\\\\.', 'g');\nvar REGEXP_LINE_TIMESTAMP = new RegExp('\\\\d{2}:\\\\d{2}', 'g');\nvar REGEXP_LINE_MEMBER_NAME = RegExpGenerator.genMemberNameRegExp();\nvar REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT = RegExpGenerator.genMsgPrefixOfMemberChatRegExp();\nvar REGEXP_LINE_MSG_PREFIX_DATE_CHANGE = new RegExp('\\\\d{4}\\\\.\\\\d{2}\\\\.\\\\d{2}', 'g');\nvar REGEXP_LINE_MSG_PREFIX_ALL = new RegExp(REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.source + \"|\" + REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.source, 'g');\nvar REGEXP_FOLDER_DELIMITER = new RegExp(/[\\/\\\\]/, 'g');\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/tool/regexp.js?");

/***/ }),

/***/ "./scripts/src/tool/tool.js":
/*!**********************************!*\
  !*** ./scripts/src/tool/tool.js ***!
  \**********************************/
/*! exports provided: Check, Assert */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Check\", function() { return Check; });\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Assert\", function() { return Assert; });\nfunction Check() {}\n\nCheck.lengthesEqual = function (array1, array2) {\n  return array1.length === array2.length;\n};\n\nfunction Assert() {}\n\nAssert.isTrue = function (statement) {\n  if (!statement) {\n    throw new Exception(ERR_ASSERT_FAIL);\n  }\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/tool/tool.js?");

/***/ }),

/***/ "./scripts/src/type/daily-line.js":
/*!****************************************!*\
  !*** ./scripts/src/type/daily-line.js ***!
  \****************************************/
/*! exports provided: DailyLINE */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DailyLINE\", function() { return DailyLINE; });\nfunction DailyLINE(dateAndNum) {\n  //public:\n  this.title = getTitle();\n  this.date = getDate();\n  this.messageObjects = getMessageObjects();\n  this.media = getMedia();\n\n  function getTitle() {\n    return DAILY_TITLE[dateAndNum];\n  }\n\n  function getDate() {\n    var timeFormatter = new TimeFormatter(DateAndNumParser.getDate(dateAndNum));\n    return timeFormatter.getDateOfDailyLINE();\n  }\n\n  function getMessageObjects() {\n    var wholeMsgStr = DAILY_MESSAGE[dateAndNum];\n    var messageParser = new MessageParser(wholeMsgStr);\n    return messageParser.messageObjects;\n  }\n\n  function getMedia() {\n    return Media.getInstance(dateAndNum);\n  }\n}\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/daily-line.js?");

/***/ }),

/***/ "./scripts/src/type/date-and-num-parser.js":
/*!*************************************************!*\
  !*** ./scripts/src/type/date-and-num-parser.js ***!
  \*************************************************/
/*! exports provided: DateAndNumParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateAndNumParser\", function() { return DateAndNumParser; });\nfunction DateAndNumParser(dateAndNum) {}\n\nDateAndNumParser.getDate = function (dateAndNum) {\n  return dateAndNum.split(REGEXP_DATE_AND_NUM_DELIMITER)[0];\n};\n\nDateAndNumParser.getNum = function (dateAndNum) {\n  return dateAndNum.split(REGEXP_DATE_AND_NUM_DELIMITER)[1];\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/date-and-num-parser.js?");

/***/ }),

/***/ "./scripts/src/type/html-generator.js":
/*!********************************************!*\
  !*** ./scripts/src/type/html-generator.js ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

eval("function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }\n\nfunction HtmlGenerator() {}\n\nHtmlGenerator.generateTitleDOM = function (title) {\n  var dom = document.createElement(HTML_TAG_NAME_DIV);\n  dom.id = HTML_ID_TITLE;\n  dom.innerHTML = title;\n  return dom;\n};\n\nHtmlGenerator.generateDateDOM = function (date) {\n  var dom = document.createElement(HTML_TAG_NAME_DIV);\n  dom.id = HTML_ID_DATE;\n  dom.innerHTML = date;\n  return dom;\n};\n\nHtmlGenerator.generateDateChangeDOM = function (dateChangeMsgObj) {\n  var dom = document.createElement(HTML_TAG_NAME_DIV);\n  dom.className = HTML_CLASS_DATE_CHANGE;\n  dom.innerHTML = dateChangeMsgObj.dateChange;\n  return dom;\n};\n\nHtmlGenerator.generateMessageDOM = function (msgObj) {\n  return msgObj.generateMessageDOM(msgObj);\n};\n\nHtmlGenerator.appendBRElementsOfNum = function (num, parentDOM) {\n  var dom = parentDOM;\n\n  for (var i = 0; i < num; i++) {\n    dom.appendChild(document.createElement(HTML_TAG_NAME_BR));\n  }\n\n  return dom;\n};\n\nHtmlGenerator.generateTextPartOfChatDOM = function (msgObjs) {\n  var dom = document.createElement(HTML_TAG_NAME_DIV);\n  dom.id = HTML_ID_TEXT_PART;\n  dom.className = HTML_CLASS_CHAT_ITEM;\n  var msgObjDOMs = msgObjs.map(function (item) {\n    return item.generateMessageDOM(item);\n  });\n  dom = msgObjDOMs.reduce(function (origDOM, item, index) {\n    origDOM.appendChild(item);\n\n    if (isNotLastItem(index, msgObjDOMs.length)) {\n      origDOM = msgObjs[index].appendBRElements(origDOM);\n    }\n\n    return origDOM;\n  }, dom);\n  return dom;\n};\n\nHtmlGenerator.generateMediaPartOfChatDOM = function (media) {\n  return media.generateMediaDOM();\n};\n\nHtmlGenerator.generateOneImageMediaDOM = function (mediaSrc) {\n  var dom = document.createElement(HTML_TAG_NAME_IMG);\n  dom.id = HTML_ID_ONE_IMG_MEDIA_PART;\n  dom.className = HTML_CLASS_CHAT_ITEM;\n  dom.src = mediaSrc;\n  return dom;\n};\n\nHtmlGenerator.generateMultiImageMediaDOM = function (mediaSrc) {\n  var _HtmlGenerator$genera;\n\n  var multiShrinkImgDOM = HtmlGenerator.generateMultiShrinkImgDOM(mediaSrc);\n  var expandImgDOM = HtmlGenerator.generateExpandImgDOM(mediaSrc[0]);\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera = {}, _defineProperty(_HtmlGenerator$genera, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_DIV), _defineProperty(_HtmlGenerator$genera, HTML_PROPERTY_ID, HTML_ID_MULTI_IMG_MEDIA_PART), _defineProperty(_HtmlGenerator$genera, HTML_PROPERTY_CLASS_NAME, HTML_CLASS_CHAT_ITEM), _HtmlGenerator$genera), [multiShrinkImgDOM, expandImgDOM]);\n};\n\nHtmlGenerator.generateChatDOM = function (media, msgObjs) {\n  var _HtmlGenerator$genera2;\n\n  var mediaPartDOM = HtmlGenerator.generateMediaPartOfChatDOM(media);\n  var textPartDOM = HtmlGenerator.generateTextPartOfChatDOM(msgObjs);\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera2 = {}, _defineProperty(_HtmlGenerator$genera2, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_DIV), _defineProperty(_HtmlGenerator$genera2, HTML_PROPERTY_ID, HTML_ID_CHAT_CONTAINER), _HtmlGenerator$genera2), [mediaPartDOM, textPartDOM]);\n};\n\nHtmlGenerator.generateTitleAndDatePartOfHeaderDOM = function (title, date) {\n  var _HtmlGenerator$genera3;\n\n  var titleDOM = HtmlGenerator.generateTitleDOM(title);\n  var dateDOM = HtmlGenerator.generateDateDOM(date);\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera3 = {}, _defineProperty(_HtmlGenerator$genera3, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_DIV), _defineProperty(_HtmlGenerator$genera3, HTML_PROPERTY_CLASS_NAME, HTML_CLASS_HEADER_ITEM), _HtmlGenerator$genera3), [titleDOM, dateDOM]);\n};\n\nHtmlGenerator.generateHeaderDOM = function (title, date) {\n  var _HtmlGenerator$genera4;\n\n  var titleAndDateDOM = HtmlGenerator.generateTitleAndDatePartOfHeaderDOM(title, date);\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera4 = {}, _defineProperty(_HtmlGenerator$genera4, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_DIV), _defineProperty(_HtmlGenerator$genera4, HTML_PROPERTY_ID, HTML_ID_HEADER_CONTAINER), _HtmlGenerator$genera4), [titleAndDateDOM]);\n};\n\nHtmlGenerator.generateMainDOM = function (dailyLINE) {\n  var _HtmlGenerator$genera5;\n\n  var headerDOM = HtmlGenerator.generateHeaderDOM(dailyLINE.title, dailyLINE.date);\n  var chatDOM = HtmlGenerator.generateChatDOM(dailyLINE.media, dailyLINE.messageObjects);\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera5 = {}, _defineProperty(_HtmlGenerator$genera5, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_DIV), _defineProperty(_HtmlGenerator$genera5, HTML_PROPERTY_ID, HTML_ID_MAIN), _HtmlGenerator$genera5), [headerDOM, chatDOM]);\n};\n\nHtmlGenerator.generateShrinkImgDOM = function (imgSrc) {\n  var dom = document.createElement(HTML_TAG_NAME_IMG);\n  dom.className = HTML_CLASS_SHRINK_IMG;\n  dom.src = imgSrc;\n  return dom;\n};\n\nHtmlGenerator.generateMultiShrinkImgDOM = function (imgSrcAry) {\n  var _HtmlGenerator$genera6;\n\n  var dom = document.createElement(HTML_TAG_NAME_DIV);\n  var children = imgSrcAry.map(function (item) {\n    return HtmlGenerator.generateShrinkImgDOM(item);\n  });\n  $(children[0]).addClass(HTML_CLASS_CURRENT_IMG);\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera6 = {}, _defineProperty(_HtmlGenerator$genera6, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_DIV), _defineProperty(_HtmlGenerator$genera6, HTML_PROPERTY_ID, HTML_ID_SHRINK_IMGS), _HtmlGenerator$genera6), children);\n};\n\nHtmlGenerator.generateExpandImgDOM = function (imgSrc) {\n  var dom = document.createElement(HTML_TAG_NAME_IMG);\n  dom.id = HTML_ID_EXPAND_IMG;\n  dom.src = imgSrc;\n  dom[HTML_PROPERTY_DATA_VALUE] = imgSrc;\n  return dom;\n};\n\nHtmlGenerator.generateVideoSourceDOM = function (videoSrc) {\n  var _HtmlGenerator$genera7;\n\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera7 = {}, _defineProperty(_HtmlGenerator$genera7, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_SOURCE), _defineProperty(_HtmlGenerator$genera7, HTML_PROPERTY_SRC, videoSrc), _defineProperty(_HtmlGenerator$genera7, HTML_PROPERTY_TYPE, OneVideoMedia.getVideoFormat(Media.getFileName(videoSrc))), _HtmlGenerator$genera7), []);\n};\n\nHtmlGenerator.generateVideoDOM = function (videoSrc) {\n  var _HtmlGenerator$genera8;\n\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera8 = {}, _defineProperty(_HtmlGenerator$genera8, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_VIDEO), _defineProperty(_HtmlGenerator$genera8, HTML_PROPERTY_CONTROLS, true), _HtmlGenerator$genera8), [HtmlGenerator.generateVideoSourceDOM(videoSrc)]);\n};\n\nHtmlGenerator.generateOneVideoMediaDOM = function (videoSrc) {\n  var _HtmlGenerator$genera9;\n\n  return HtmlGenerator.generateDOMWithChildren((_HtmlGenerator$genera9 = {}, _defineProperty(_HtmlGenerator$genera9, HTML_PROPERTY_TAG_NAME, HTML_TAG_NAME_DIV), _defineProperty(_HtmlGenerator$genera9, HTML_PROPERTY_ID, HTML_ID_ONE_VIDEO_MEDIA_PART), _defineProperty(_HtmlGenerator$genera9, HTML_PROPERTY_CLASS_NAME, HTML_CLASS_CHAT_ITEM), _HtmlGenerator$genera9), [HtmlGenerator.generateVideoDOM(videoSrc)]);\n};\n\nHtmlGenerator.generateDOMWithChildren = function (domProperties, children) {\n  var dom = document.createElement(domProperties[HTML_PROPERTY_TAG_NAME]);\n  var keys = Object.keys(domProperties);\n  keys.filter(function (item) {\n    return item != HTML_PROPERTY_TAG_NAME;\n  }).forEach(function (item) {\n    return dom[item] = domProperties[item];\n  });\n  children.forEach(function (child) {\n    return dom.appendChild(child);\n  });\n  return dom;\n};\n\nHtmlGenerator.generateDailyHTML = function (dateAndNum) {\n  var import_files = __webpack_require__(/*! ../tool/import-files.js */ \"./scripts/src/tool/import-files.js\");\n\n  import_files.doImport(import_files.IMPORT_TYPE_ES6);\n  var dailyLINE = new DailyLINE(dateAndNum);\n  var dom = HtmlGenerator.generateMainDOM(dailyLINE);\n  document.body.appendChild(dom);\n  dailyLINE.media.addEventListeners();\n};\n\nfunction isNotLastItem(index, length) {\n  return index < length - 1;\n}\n\nmodule.exports = {\n  HtmlGenerator: HtmlGenerator\n};\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/html-generator.js?");

/***/ }),

/***/ "./scripts/src/type/media-related-types/media.js":
/*!*******************************************************!*\
  !*** ./scripts/src/type/media-related-types/media.js ***!
  \*******************************************************/
/*! exports provided: Media */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Media\", function() { return Media; });\nfunction Media() {}\n\nMedia.getInstance = function (dateAndNum) {\n  var type = Media.getMediaType(dateAndNum);\n\n  switch (type) {\n    case MEDIA_TYPE_ONE_IMAGE:\n      return new OneImageMedia(dateAndNum);\n\n    case MEDIA_TYPE_MULTI_IMAGE:\n      return new MultiImageMedia(dateAndNum);\n\n    case MEDIA_TYPE_ONE_VIDEO:\n      return new OneVideoMedia(dateAndNum);\n\n    default:\n      throw new MessageFormatException(ERR_INVALID_MEDIA_TYPE, type);\n  }\n};\n\nMedia.getSrcFolder = function (dateAndNum) {\n  var date = DateAndNumParser.getDate(dateAndNum);\n  var num = DateAndNumParser.getNum(dateAndNum);\n  var timeFormatter = new TimeFormatter(date);\n  var srcFolder = RESOURCE_FILES_LOCATION + \"/\" + timeFormatter.year + \"/\" + timeFormatter.month + \"/\" + timeFormatter.day + \"/\" + num;\n  return srcFolder;\n};\n\nMedia.getSrcFilePaths = function (dateAndNum) {\n  return DAILY_MEDIA_SOURCE[dateAndNum].map(function (item) {\n    return Media.getSrcFolder(dateAndNum) + \"/\" + item;\n  });\n};\n\nMedia.getMediaType = function (dateAndNum) {\n  return DAILY_MEDIA_TYPE[dateAndNum];\n};\n\nMedia.getFileExtention = function (fileName) {\n  return fileName.split(\".\").pop();\n};\n\nMedia.getFileName = function (filePath) {\n  return filePath.split(REGEXP_FOLDER_DELIMITER).pop();\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/media-related-types/media.js?");

/***/ }),

/***/ "./scripts/src/type/media-related-types/multi-image-media.js":
/*!*******************************************************************!*\
  !*** ./scripts/src/type/media-related-types/multi-image-media.js ***!
  \*******************************************************************/
/*! exports provided: MultiImageMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MultiImageMedia\", function() { return MultiImageMedia; });\nfunction MultiImageMedia(dateAndNum) {\n  this.type = MEDIA_TYPE_MULTI_IMAGE;\n  this.src = Media.getSrcFilePaths(dateAndNum);\n\n  this.generateMediaDOM = function () {\n    return HtmlGenerator.generateMultiImageMediaDOM(this.src);\n  };\n\n  this.addEventListeners = function () {\n    MultiImageMedia.addClickEventHandlerForShrinkImg();\n    MultiImageMedia.addClickEventHandlerForExpandImg();\n  };\n}\n\nMultiImageMedia.addClickEventHandlerForShrinkImg = function () {\n  $(\".\" + HTML_CLASS_SHRINK_IMG).click(function () {\n    removeClassCurrentImgFromCurrentShrinkImgDOM();\n    replaceExpandImgSrcWithClickedShrinkImgSrc(this);\n    $(this).addClass(HTML_CLASS_CURRENT_IMG);\n    $(this).data(IS_CLICKED, true);\n  });\n};\n\nMultiImageMedia.addClickEventHandlerForExpandImg = function () {\n  $(\"#\" + HTML_ID_EXPAND_IMG).click(function () {\n    var firstShrinkImgDOM = getFirstShrinkImgDOM(this);\n    var currentShrinkImgDOM = getCurrentShrinkImgDOM(this);\n    var nextShrinkImgDOM = getNextShrinkImgDOM(currentShrinkImgDOM, firstShrinkImgDOM);\n    replaceExpandImgSrcWithNextShrinkImgSrc(this, nextShrinkImgDOM);\n    $(currentShrinkImgDOM).removeClass(HTML_CLASS_CURRENT_IMG);\n    $(nextShrinkImgDOM).addClass(HTML_CLASS_CURRENT_IMG);\n    $(this).data(IS_CLICKED, true);\n  });\n};\n\nfunction removeClassCurrentImgFromCurrentShrinkImgDOM() {\n  var currentExpandImgSrc = $(\"#\" + HTML_ID_EXPAND_IMG).attr(HTML_PROPERTY_SRC);\n  var currentShrinkImgDOM = $(\".\" + HTML_CLASS_SHRINK_IMG).filter($(\"img[src=\\\"\".concat(currentExpandImgSrc, \"\\\"]\")));\n  $(currentShrinkImgDOM).removeClass(HTML_CLASS_CURRENT_IMG);\n}\n\nfunction replaceExpandImgSrcWithClickedShrinkImgSrc(clickedDOM) {\n  var clickedShrinkImgSrc = $(clickedDOM).attr(HTML_PROPERTY_SRC);\n  var expandImgDOM = $(\"#\" + HTML_ID_EXPAND_IMG);\n  expandImgDOM.attr(HTML_PROPERTY_SRC, clickedShrinkImgSrc);\n}\n\nfunction getFirstShrinkImgDOM(expandImgDOM) {\n  var firstImgSrc = $(expandImgDOM).prop(HTML_PROPERTY_DATA_VALUE);\n  return $(\".\" + HTML_CLASS_SHRINK_IMG).filter($(\"img[src=\\\"\".concat(firstImgSrc, \"\\\"]\")));\n}\n\nfunction getCurrentShrinkImgDOM(currentExpandImgDOM) {\n  var currentImgSrc = $(currentExpandImgDOM).attr(HTML_PROPERTY_SRC);\n  return $(\".\" + HTML_CLASS_SHRINK_IMG).filter($(\"img[src=\\\"\".concat(currentImgSrc, \"\\\"]\")));\n}\n\nfunction getNextShrinkImgDOM(currentShrinkImgDOM, firstShrinkImgDOM) {\n  return $(currentShrinkImgDOM).next().attr(HTML_PROPERTY_SRC) != undefined ? $(currentShrinkImgDOM).next() : $(firstShrinkImgDOM);\n}\n\nfunction replaceExpandImgSrcWithNextShrinkImgSrc(expandImgDOM, nextShrinkImgDOM) {\n  $(expandImgDOM).attr(HTML_PROPERTY_SRC, $(nextShrinkImgDOM).attr(HTML_PROPERTY_SRC));\n}\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/media-related-types/multi-image-media.js?");

/***/ }),

/***/ "./scripts/src/type/media-related-types/one-image-media.js":
/*!*****************************************************************!*\
  !*** ./scripts/src/type/media-related-types/one-image-media.js ***!
  \*****************************************************************/
/*! exports provided: OneImageMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OneImageMedia\", function() { return OneImageMedia; });\nfunction OneImageMedia(dateAndNum) {\n  this.type = MEDIA_TYPE_ONE_IMAGE;\n  this.src = Media.getSrcFilePaths(dateAndNum)[0];\n  this.generateMediaDOM = function () {\n    return HtmlGenerator.generateOneImageMediaDOM(this.src);\n  }, this.addEventListeners = function () {};\n}\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/media-related-types/one-image-media.js?");

/***/ }),

/***/ "./scripts/src/type/media-related-types/one-video-media.js":
/*!*****************************************************************!*\
  !*** ./scripts/src/type/media-related-types/one-video-media.js ***!
  \*****************************************************************/
/*! exports provided: OneVideoMedia */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"OneVideoMedia\", function() { return OneVideoMedia; });\nfunction OneVideoMedia(dateAndNum) {\n  this.type = MEDIA_TYPE_ONE_VIDEO;\n  this.src = Media.getSrcFilePaths(dateAndNum)[0];\n\n  this.generateMediaDOM = function () {\n    return HtmlGenerator.generateOneVideoMediaDOM(this.src);\n  };\n\n  this.addEventListeners = function () {};\n}\n\nOneVideoMedia.getVideoFormat = function (fileName) {\n  return VIDEO_FORMAT_PREFIX + Media.getFileExtention(fileName);\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/media-related-types/one-video-media.js?");

/***/ }),

/***/ "./scripts/src/type/member-chat-dom-generator.js":
/*!*******************************************************!*\
  !*** ./scripts/src/type/member-chat-dom-generator.js ***!
  \*******************************************************/
/*! exports provided: MemberChatDOMGenerator */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MemberChatDOMGenerator\", function() { return MemberChatDOMGenerator; });\nfunction MemberChatDOMGenerator() {}\n\nMemberChatDOMGenerator.generateMemberChatDOM = function (memberChatMsgObj) {\n  var dom = document.createElement(HTML_TAG_NAME_DIV);\n  dom.className = HTML_CLASS_MESSAGE;\n  var memberIconDOM = MemberChatDOMGenerator.generateMemberIconDOM(memberChatMsgObj.memberIconSrc);\n  var timestampDOM = MemberChatDOMGenerator.generateTimestampDOM(memberChatMsgObj.timestamp);\n  var chatContentDOM = MemberChatDOMGenerator.generateChatContentDOM(memberChatMsgObj.chatContent);\n  dom.appendChild(memberIconDOM);\n  dom.appendChild(document.createTextNode(SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP));\n  dom.appendChild(timestampDOM);\n  dom.appendChild(document.createElement(HTML_TAG_NAME_BR));\n  dom.appendChild(chatContentDOM);\n  return dom;\n};\n\nMemberChatDOMGenerator.generateMemberIconDOM = function (memberIconSrc) {\n  var dom = document.createElement(HTML_TAG_NAME_IMG);\n  dom.className = HTML_CLASS_MEMBER_ICON;\n  dom.src = memberIconSrc;\n  return dom;\n};\n\nMemberChatDOMGenerator.generateTimestampDOM = function (timestamp) {\n  var dom = document.createElement(HTML_TAG_NAME_SPAN);\n  dom.className = HTML_CLASS_TIMESTAMP;\n  dom.innerHTML = timestamp;\n  return dom;\n};\n\nMemberChatDOMGenerator.generateChatContentDOM = function (chatContent) {\n  var dom = document.createTextNode(chatContent);\n  return dom;\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/member-chat-dom-generator.js?");

/***/ }),

/***/ "./scripts/src/type/member.js":
/*!************************************!*\
  !*** ./scripts/src/type/member.js ***!
  \************************************/
/*! exports provided: Member */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Member\", function() { return Member; });\nfunction Member() {}\n\nMember.getMemberIconSrc = function (memberName) {\n  return MEMBER_ICON_LOCATION + MEMBER_NAME_MAPPING[memberName] + MEMBER_ICON_EXTENTION;\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/member.js?");

/***/ }),

/***/ "./scripts/src/type/message-parser.js":
/*!********************************************!*\
  !*** ./scripts/src/type/message-parser.js ***!
  \********************************************/
/*! exports provided: MessageParser */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MessageParser\", function() { return MessageParser; });\nfunction MessageParser(wholeMsgStr) {\n  this.messageObjects = getMessageObjects();\n\n  function getMessageObjects() {\n    var msgPrefixes = getMsgPrefixes();\n    var msgContents = getMsgContents();\n    Assert.isTrue(Check.lengthesEqual(msgPrefixes, msgContents));\n    var msgTypes = getMsgTypes(msgPrefixes);\n    var messageObjects = createMessageObjects(msgTypes);\n    setPropertiesOfMessageObjects(messageObjects, msgPrefixes, msgContents); //console.log(messageObjects);\n\n    return messageObjects;\n  }\n\n  function getMsgPrefixes() {\n    return wholeMsgStr.match(REGEXP_LINE_MSG_PREFIX_ALL);\n  }\n\n  function getMsgContents() {\n    return wholeMsgStr.split(REGEXP_LINE_MSG_PREFIX_ALL).filter(function (x) {\n      return x;\n    }).map(function (x) {\n      return x.trim();\n    });\n  }\n\n  function getMsgTypes(msgPrefixes) {\n    try {\n      return msgPrefixes.map(function (item) {\n        return MessageParser.getMsgTypeByPrefix(item);\n      });\n    } catch (e) {\n      console.log(e);\n    }\n  }\n\n  function setMsgTypes(messages, msgTypes) {\n    var getMsgTypeObjFunc = function getMsgTypeObjFunc(msgType) {\n      if (msgType === MSG_TYPE_MEMBER_CHAT) {\n        return new MemberChatMessage();\n      } else if (msgType === MSG_TYPE_DATE_CHANGE) {\n        message.setMsgTypeObj(new DateChangeMessage(msgPrefixes[i], msgContents[i]));\n      }\n    };\n\n    messages.forEach(function (item) {\n      return item.setMsgTypeObj();\n    });\n  }\n\n  function createMessageObjects(msgTypes) {\n    return msgTypes.map(function (item) {\n      return Message.create(item);\n    });\n  }\n\n  function setPropertiesOfMessageObjects(messageObjects, msgPrefixes, msgContents) {\n    messageObjects.forEach(function (item, i) {\n      return item.setProperties(msgPrefixes[i], msgContents[i]);\n    });\n  }\n}\n\nMessageParser.getMsgTypeByPrefix = function (prefix) {\n  REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.lastIndex = 0;\n  REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.lastIndex = 0;\n\n  if (REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.test(prefix)) {\n    return MSG_TYPE_MEMBER_CHAT;\n  }\n\n  if (REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.test(prefix)) {\n    return MSG_TYPE_DATE_CHANGE;\n  }\n\n  throw new MessageFormatException(ERR_INVALID_MESSAGE_PREFIX, prefix);\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/message-parser.js?");

/***/ }),

/***/ "./scripts/src/type/message-related-types/date-change-message.js":
/*!***********************************************************************!*\
  !*** ./scripts/src/type/message-related-types/date-change-message.js ***!
  \***********************************************************************/
/*! exports provided: DateChangeMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"DateChangeMessage\", function() { return DateChangeMessage; });\nfunction DateChangeMessage() {\n  //prefix = \"2020.02.18\"\n  //content = \"星期二\"\n  this.setProperties = function (prefix, content) {\n    this.dateChange = getDateChange(prefix);\n    this.type = MSG_TYPE_DATE_CHANGE;\n    return this;\n  };\n\n  this.appendBRElements = function (dom) {\n    return HtmlGenerator.appendBRElementsOfNum(0, dom);\n  };\n\n  this.generateMessageDOM = function (msgObj) {\n    return HtmlGenerator.generateDateChangeDOM(msgObj);\n  };\n\n  function getDateChange(prefix) {\n    return prefix.match(REGEXP_LINE_MSG_PREFIX_DATE_CHANGE)[0].split(REGEXP_LINE_DATE_CHANGE_DELIMITER).join('/');\n  }\n}\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/message-related-types/date-change-message.js?");

/***/ }),

/***/ "./scripts/src/type/message-related-types/member-chat-message.js":
/*!***********************************************************************!*\
  !*** ./scripts/src/type/message-related-types/member-chat-message.js ***!
  \***********************************************************************/
/*! exports provided: MemberChatMessage */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"MemberChatMessage\", function() { return MemberChatMessage; });\nfunction MemberChatMessage() {\n  //prefix = \"22:55 victor\"\n  //content = \"小螞蟻玩水玩得好高興!!\"\n  this.setProperties = function (prefix, content) {\n    this.memberIconSrc = getMemberIconSrc(prefix);\n    this.timestamp = getTimestamp(prefix);\n    this.chatContent = getChatConent(content);\n    this.type = MSG_TYPE_MEMBER_CHAT;\n    return this;\n  };\n\n  this.appendBRElements = function (dom) {\n    return HtmlGenerator.appendBRElementsOfNum(1, dom);\n  };\n\n  this.generateMessageDOM = function (msgObj) {\n    return MemberChatDOMGenerator.generateMemberChatDOM(msgObj);\n  };\n\n  function getMemberIconSrc(prefix) {\n    var memberName = getMemberName(prefix);\n    return Member.getMemberIconSrc(memberName);\n  }\n\n  function getMemberName(prefix) {\n    return prefix.match(REGEXP_LINE_MEMBER_NAME)[0];\n  }\n\n  function getTimestamp(prefix) {\n    return prefix.match(REGEXP_LINE_TIMESTAMP)[0];\n  }\n\n  function getChatConent(content) {\n    return content;\n  }\n}\n\n;\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/message-related-types/member-chat-message.js?");

/***/ }),

/***/ "./scripts/src/type/message-related-types/message.js":
/*!***********************************************************!*\
  !*** ./scripts/src/type/message-related-types/message.js ***!
  \***********************************************************/
/*! exports provided: Message */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"Message\", function() { return Message; });\nfunction Message() {}\n\nMessage.create = function (type) {\n  switch (type) {\n    case MSG_TYPE_MEMBER_CHAT:\n      return new MemberChatMessage();\n\n    case MSG_TYPE_DATE_CHANGE:\n      return new DateChangeMessage();\n\n    default:\n      throw new MessageFormatException(ERR_INVALID_MESSAGE_TYPE, type);\n  }\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/message-related-types/message.js?");

/***/ }),

/***/ "./scripts/src/type/time-formatter.js":
/*!********************************************!*\
  !*** ./scripts/src/type/time-formatter.js ***!
  \********************************************/
/*! exports provided: TimeFormatter */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"TimeFormatter\", function() { return TimeFormatter; });\nfunction TimeFormatter(date) {\n  this.year = getYear();\n  this.month = getMonth();\n  this.day = getDay();\n\n  function getYear() {\n    return date.substr(0, 4);\n  }\n\n  function getMonth() {\n    return date.substr(4, 2);\n  }\n\n  function getDay() {\n    return date.substr(6, 2);\n  }\n}\n\nTimeFormatter.prototype = {\n  constructor: TimeFormatter,\n  getDateOfDailyLINE: function getDateOfDailyLINE() {\n    return TimeFormatter.getShortMonthName(this.month) + \" \" + this.day + \", \" + this.year;\n  },\n  getDateOfAllNumber: function getDateOfAllNumber() {\n    return this.year + this.month + this.day;\n  }\n};\n\nTimeFormatter.getMonthName = function (month) {\n  var index = parseInt(month, 10) - 1;\n  return MONTH_NAME[index];\n};\n\nTimeFormatter.getShortMonthName = function (month) {\n  return this.getMonthName(month).substr(0, 3);\n};\n\n\n\n//# sourceURL=webpack://MyModule/./scripts/src/type/time-formatter.js?");

/***/ })

/******/ });