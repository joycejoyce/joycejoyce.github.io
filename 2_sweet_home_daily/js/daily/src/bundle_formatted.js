var MyModule = function(e) {
    var t = {};

    function n(r) {
        if (t[r]) return t[r].exports;
        var _ = t[r] = {
            i: r,
            l: !1,
            exports: {}
        };
        return e[r].call(_.exports, _, _.exports, n), _.l = !0, _.exports
    }
    return n.m = e, n.c = t, n.d = function(e, t, r) {
        n.o(e, t) || Object.defineProperty(e, t, {
            enumerable: !0,
            get: r
        })
    }, n.r = function(e) {
        "undefined" != typeof Symbol && Symbol.toStringTag && Object.defineProperty(e, Symbol.toStringTag, {
            value: "Module"
        }), Object.defineProperty(e, "__esModule", {
            value: !0
        })
    }, n.t = function(e, t) {
        if (1 & t && (e = n(e)), 8 & t) return e;
        if (4 & t && "object" == typeof e && e && e.__esModule) return e;
        var r = Object.create(null);
        if (n.r(r), Object.defineProperty(r, "default", {
                enumerable: !0,
                value: e
            }), 2 & t && "string" != typeof e)
            for (var _ in e) n.d(r, _, function(t) {
                return e[t]
            }.bind(null, _));
        return r
    }, n.n = function(e) {
        var t = e && e.__esModule ? function() {
            return e.default
        } : function() {
            return e
        };
        return n.d(t, "a", t), t
    }, n.o = function(e, t) {
        return Object.prototype.hasOwnProperty.call(e, t)
    }, n.p = "", n(n.s = 0)
}([function(e, t, n) {
    "use strict";

    function r(e) {
        this.title = DAILY_TITLE[e], this.date = new T(A.getDate(e)).getDateOfDailyLINE(), this.messageObjects = new _(DAILY_MESSAGE[e]).messageObjects, this.media = new o(e)
    }

    function _(e) {
        this.messageObjects = function() {
            let t = e.match(REGEXP_LINE_MSG_PREFIX_ALL),
                n = e.split(REGEXP_LINE_MSG_PREFIX_ALL).filter(e => e).map(e => e.trim());
            Assert.isTrue(Check.lengthesEqual(t, n));
            let r = function(e) {
                return e.map(e => E.create(e))
            }(function(e) {
                try {
                    return e.map(e => _.getMsgTypeByPrefix(e))
                } catch (e) {
                    console.log(e)
                }
            }(t));
            return function(e, t, n) {
                e.forEach((e, r) => e.setProperties(t[r], n[r]))
            }(r, t, n), r
        }()
    }

    function E() {}

    function u() {
        this.setProperties = function(e, t) {
            return this.memberIconSrc = function(e) {
                let t = function(e) {
                    return e.match(REGEXP_LINE_MEMBER_NAME)[0]
                }(e);
                return i.getMemberIconSrc(t)
            }(e), this.timestamp = function(e) {
                return e.match(REGEXP_LINE_TIMESTAMP)[0]
            }(e), this.chatContent = t, this
        }, this.generateMessageDOM = function(e) {
            return a.generateMemberChatDOM(e)
        }
    }

    function i() {}

    function M() {
        this.setProperties = function(e, t) {
            return this.dateChange = function(e) {
                return e.match(REGEXP_LINE_MSG_PREFIX_DATE_CHANGE)[0].split(REGEXP_LINE_DATE_CHANGE_DELIMITER).join("/")
            }(e), this
        }, this.generateMessageDOM = function(e) {
            return c.generateDateChangeDOM(e)
        }
    }

    function o(e) {
        this.type = DAILY_MEDIA_TYPE[e], this.src = o.getSrcFilePaths(e)
    }

    function c() {}

    function a() {}

    function T(e) {
        this.year = e.substr(0, 4), this.month = e.substr(4, 2), this.day = e.substr(6, 2)
    }

    function A(e) {}

    function s(e) {
        console.log("Enter generateDailyHTML()");
        let t = new r(e),
            n = c.generateMainDOM(t);
        document.body.appendChild(n)
    }
    n.r(t), n.d(t, "DateAndNumParser", (function() {
        return A
    })), n.d(t, "Media", (function() {
        return o
    })), n.d(t, "DailyLINE", (function() {
        return r
    })), n.d(t, "HtmlGenerator", (function() {
        return c
    })), n.d(t, "MemberChatDOMGenerator", (function() {
        return a
    })), n.d(t, "generateDailyHTML", (function() {
        return s
    })), Object.entries(n(1)).forEach(([e, t]) => window[e] = t), console.log("here"), Object.entries(n(2)).forEach(([e, t]) => window[e] = t), Object.entries(n(0)).forEach(([e, t]) => window[e] = t), Object.entries(n(3)).forEach(([e, t]) => window[e] = t), Object.entries(n(4)).forEach(([e, t]) => window[e] = t), Object.entries(n(5)).forEach(([e, t]) => window[e] = t), console.log("here1"), _.getMsgTypeByPrefix = function(e) {
        if (REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.lastIndex = 0, REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.lastIndex = 0, REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT.test(e)) return MSG_TYPE_MEMBER_CHAT;
        if (REGEXP_LINE_MSG_PREFIX_DATE_CHANGE.test(e)) return MSG_TYPE_DATE_CHANGE;
        throw new MessageFormatException(ERR_INVALID_MESSAGE_PREFIX, e)
    }, E.create = function(e) {
        switch (e) {
            case MSG_TYPE_MEMBER_CHAT:
                return new u;
            case MSG_TYPE_DATE_CHANGE:
                return new M;
            default:
                throw new MessageFormatException(ERR_INVALID_MESSAGE_TYPE, e)
        }
    }, i.getMemberIconSrc = function(e) {
        return MEMBER_ICON_LOCATION + MEMBER_NAME_MAPPING[e] + MEMBER_ICON_EXTENTION
    }, o.getSrcFolder = function(e) {
        const t = A.getDate(e),
            n = A.getNum(e);
        let r = new T(t);
        return RESOURCE_FILES_LOCATION + "/" + r.year + "/" + r.month + "/" + r.day + "/" + n
    }, o.getSrcFilePaths = function(e) {
        return DAILY_MEDIA_SOURCE[e].map(t => o.getSrcFolder(e) + "/" + t)
    }, c.generateTitleDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_DIV);
        return t.id = HTML_ID_TITLE, t.innerHTML = e, t
    }, c.generateDateDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_DIV);
        return t.id = HTML_ID_DATE, t.innerHTML = e, t
    }, c.generateDateChangeDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_DIV);
        return t.className = HTML_CLASS_DATE_CHANGE, t.innerHTML = e.dateChange, t
    }, c.generateMessageDOM = function(e) {
        return e.generateMessageDOM(e)
    }, c.appendBRElementsOfNum = function(e, t) {
        let n = t;
        for (let t = 0; t < e; t++) n.appendChild(document.createElement(HTML_TAG_NAME_BR));
        return n
    }, c.generateTextPartOfChatDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_DIV);
        return t.id = HTML_ID_TEXT_PART, t.className = HTML_CLASS_CHAT_ITEM, t = e.map(e => e.generateMessageDOM(e)).reduce((e, t, n) => (n > 0 && (e = c.appendBRElementsOfNum(2, e)), e.appendChild(t), e), t), t
    }, c.generateMediaPartOfChatDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_DIV);
        t.className = HTML_CLASS_CHAT_ITEM;
        let n = document.createElement(HTML_TAG_NAME_IMG);
        return n.id = HTML_ID_MEDIA_PART, n.src = e.src[0], t.appendChild(n), t
    }, c.generateChatDOM = function(e, t) {
        let n = c.generateMediaPartOfChatDOM(e),
            r = c.generateTextPartOfChatDOM(t);
        return c.generateDOMWithChildren({
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_CHAT_CONTAINER
        }, [n, r])
    }, c.generateTitleAndDatePartOfHeaderDOM = function(e, t) {
        let n = c.generateTitleDOM(e),
            r = c.generateDateDOM(t);
        return c.generateDOMWithChildren({
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_CLASS_NAME]: HTML_CLASS_HEADER_ITEM
        }, [n, r])
    }, c.generateHeaderDOM = function(e, t) {
        let n = c.generateTitleAndDatePartOfHeaderDOM(e, t);
        return c.generateDOMWithChildren({
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_HEADER_CONTAINER
        }, [n])
    }, c.generateMainDOM = function(e) {
        let t = c.generateHeaderDOM(e.title, e.date),
            n = c.generateChatDOM(e.media, e.messageObjects);
        return c.generateDOMWithChildren({
            [HTML_PROPERTY_TAG_NAME]: HTML_TAG_NAME_DIV,
            [HTML_PROPERTY_ID]: HTML_ID_MAIN
        }, [t, n])
    }, c.generateDOMWithChildren = function(e, t) {
        let n = document.createElement(e[HTML_PROPERTY_TAG_NAME]);
        return Object.keys(e).filter(e => e != HTML_PROPERTY_TAG_NAME).forEach(t => n[t] = e[t]), t.forEach(e => n.appendChild(e)), n
    }, a.generateMemberChatDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_DIV);
        t.className = HTML_CLASS_MESSAGE;
        let n = a.generateMemberIconDOM(e.memberIconSrc),
            r = a.generateTimestampDOM(e.timestamp),
            _ = a.generateChatContentDOM(e.chatContent);
        return t.appendChild(n), t.appendChild(document.createTextNode(SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP)), t.appendChild(r), t.appendChild(document.createElement(HTML_TAG_NAME_BR)), t.appendChild(_), t
    }, a.generateMemberIconDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_IMG);
        return t.className = HTML_CLASS_MEMBER_ICON, t.src = e, t
    }, a.generateTimestampDOM = function(e) {
        let t = document.createElement(HTML_TAG_NAME_SPAN);
        return t.className = HTML_CLASS_TIMESTAMP, t.innerHTML = e, t
    }, a.generateChatContentDOM = function(e) {
        return document.createTextNode(e)
    }, T.prototype = {
        constructor: T,
        getDateOfDailyLINE: function() {
            return T.getShortMonthName(this.month) + " " + this.day + ", " + this.year
        },
        getDateOfAllNumber: function() {
            return this.year + this.month + this.day
        }
    }, T.getMonthName = function(e) {
        let t = parseInt(e, 10) - 1;
        return MONTH_NAME[t]
    }, T.getShortMonthName = function(e) {
        return this.getMonthName(e).substr(0, 3)
    }, A.getDate = function(e) {
        return e.split(REGEXP_DATE_AND_NUM_DELIMITER)[0]
    }, A.getNum = function(e) {
        return e.split(REGEXP_DATE_AND_NUM_DELIMITER)[1]
    }
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "MSG_TYPE_MEMBER_CHAT", (function() {
        return h
    })), n.d(t, "MSG_TYPE_DATE_CHANGE", (function() {
        return O
    })), n.d(t, "MONTH_NAME", (function() {
        return m
    })), n.d(t, "ERR_INVALID_MESSAGE_PREFIX", (function() {
        return P
    })), n.d(t, "ERR_ASSERT_FAIL", (function() {
        return H
    })), n.d(t, "HTML_ID_TITLE", (function() {
        return r
    })), n.d(t, "HTML_ID_DATE", (function() {
        return _
    })), n.d(t, "HTML_ID_TEXT_PART", (function() {
        return E
    })), n.d(t, "HTML_ID_MEDIA_PART", (function() {
        return u
    })), n.d(t, "HTML_ID_CHAT_CONTAINER", (function() {
        return i
    })), n.d(t, "HTML_ID_HEADER_CONTAINER", (function() {
        return M
    })), n.d(t, "HTML_ID_MAIN", (function() {
        return o
    })), n.d(t, "HTML_CLASS_TIMESTAMP", (function() {
        return c
    })), n.d(t, "HTML_CLASS_MEMBER_ICON", (function() {
        return a
    })), n.d(t, "HTML_CLASS_MESSAGE", (function() {
        return T
    })), n.d(t, "HTML_CLASS_DATE_CHANGE", (function() {
        return A
    })), n.d(t, "HTML_CLASS_CHAT_ITEM", (function() {
        return s
    })), n.d(t, "HTML_CLASS_HEADER_ITEM", (function() {
        return f
    })), n.d(t, "HTML_TAG_NAME_SPAN", (function() {
        return l
    })), n.d(t, "HTML_TAG_NAME_IMG", (function() {
        return D
    })), n.d(t, "HTML_TAG_NAME_DIV", (function() {
        return L
    })), n.d(t, "HTML_TAG_NAME_BR", (function() {
        return R
    })), n.d(t, "HTML_PROPERTY_TAG_NAME", (function() {
        return d
    })), n.d(t, "HTML_PROPERTY_ID", (function() {
        return I
    })), n.d(t, "HTML_PROPERTY_CLASS_NAME", (function() {
        return N
    })), n.d(t, "SPACES_BETWEEN_MEMBER_ICON_AND_TIMESTAMP", (function() {
        return g
    }));
    const r = "title",
        _ = "date",
        E = "text-part",
        u = "media-part",
        i = "chat-container",
        M = "header-container",
        o = "main",
        c = "timestamp",
        a = "member_icon",
        T = "message",
        A = "date-change",
        s = "chat-item",
        f = "header-item",
        d = "tagName",
        I = "id",
        N = "className",
        l = "SPAN",
        D = "IMG",
        L = "DIV",
        R = "BR",
        g = "  ",
        m = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
        h = "MEMBER_CHAT",
        O = "DATE_CHANGE",
        P = "Invalid message prefix",
        H = "Assert fail"
}, function(e, t, n) {
    "use strict";

    function r(e, t) {
        this.error = e, this.originalMessage = t
    }

    function _(e) {
        this.error = e
    }
    n.r(t), n.d(t, "Exception", (function() {
        return _
    })), n.d(t, "MessageFormatException", (function() {
        return r
    }))
}, function(e, t, n) {
    "use strict";
    n.r(t), n.d(t, "RESOURCE_FILES_LOCATION", (function() {
        return r
    })), n.d(t, "MEMBER_NAME_MAPPING", (function() {
        return u
    })), n.d(t, "MEMBER_ICON_LOCATION", (function() {
        return _
    })), n.d(t, "MEMBER_ICON_EXTENTION", (function() {
        return E
    })), n.d(t, "DAILY_TITLE", (function() {
        return i
    })), n.d(t, "DAILY_MESSAGE", (function() {
        return M
    })), n.d(t, "DAILY_MEDIA_TYPE", (function() {
        return o
    })), n.d(t, "DAILY_MEDIA_SOURCE", (function() {
        return c
    }));
    const r = "../resource_files",
        _ = "../resource_files/member_icon/",
        E = ".png",
        u = {
            "許天亮": "frank",
            "美燕": "amy",
            victor: "victor",
            dorith1989: "dorith",
            "阿羊": "jim"
        },
        i = {
            "20200214-2": "小螞蟻玩水"
        },
        M = {
            "20200214-2": "22:55 victor 小螞蟻玩水玩得好高興!!\n2020.02.18 星期二\n23:01 阿羊 阿公阿嬤陪伴！！\n爸爸媽媽的愛\n幸福的小螞蟻"
        },
        o = {
            "20200214-2": "ONE_IMAGE"
        },
        c = {
            "20200214-2": ["S__43147276.jpg"]
        }
}, function(e, t, n) {
    "use strict";

    function r() {}
    n.r(t), n.d(t, "REGEXP_DATE_AND_NUM_DELIMITER", (function() {
        return _
    })), n.d(t, "REGEXP_LINE_MSG_PREFIX_ALL", (function() {
        return c
    })), n.d(t, "REGEXP_LINE_MSG_PREFIX_MEMBER_CHAT", (function() {
        return M
    })), n.d(t, "REGEXP_LINE_MSG_PREFIX_DATE_CHANGE", (function() {
        return o
    })), n.d(t, "REGEXP_LINE_MEMBER_NAME", (function() {
        return i
    })), n.d(t, "REGEXP_LINE_TIMESTAMP", (function() {
        return u
    })), n.d(t, "REGEXP_LINE_DATE_CHANGE_DELIMITER", (function() {
        return E
    })), r.genMsgPrefixOfMemberChatRegExp = function() {
        let e = Object.keys(MEMBER_NAME_MAPPING).join("|" + u.source + "\\s");
        return e = u.source + "\\s" + e, new RegExp(e, "g")
    }, r.genMemberNameRegExp = function() {
        return new RegExp(Object.keys(MEMBER_NAME_MAPPING).join("|"), "g")
    };
    const _ = new RegExp("-", "g"),
        E = new RegExp("\\.", "g"),
        u = new RegExp("\\d{2}:\\d{2}", "g"),
        i = r.genMemberNameRegExp(),
        M = r.genMsgPrefixOfMemberChatRegExp(),
        o = new RegExp("\\d{4}\\.\\d{2}\\.\\d{2}", "g"),
        c = new RegExp(M.source + "|" + o.source, "g")
}, function(e, t, n) {
    "use strict";

    function r() {}

    function _() {}
    n.r(t), n.d(t, "Check", (function() {
        return r
    })), n.d(t, "Assert", (function() {
        return _
    })), r.lengthesEqual = function(e, t) {
        return e.length === t.length
    }, _.isTrue = function(e) {
        if (!e) throw new Exception(ERR_ASSERT_FAIL)
    }
}]);