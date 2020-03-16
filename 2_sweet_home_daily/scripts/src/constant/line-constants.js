const RESOURCE_FILES_LOCATION = "./images";
const MEMBER_ICON_LOCATION = RESOURCE_FILES_LOCATION + "/member_icon/";
const MEMBER_ICON_EXTENTION = ".png";
const MEMBER_NAME_MAPPING = {
  "許天亮": "frank",
  "美燕": "amy",
  "victor": "victor",
  "dorith1989": "dorith",
  "阿羊": "jim"
};

const DAILY_TITLE = {
    "20190822-2": "小法",
    "20200214-2": "小螞蟻玩水"
};

const DAILY_MESSAGE = {
    "20190822-2": `21:49 amy 東躲西藏
我就不想回家啦！
21:50 jim 小法跟我小時候最愛躲的地方一樣..
跟姊姊玩躲貓貓的時候我都會去躲媽媽衣櫃
印象就是媽媽每次穿很美麗的長裙(深色的碎花裙)`,
    "20200214-2": `22:55 victor 小螞蟻玩水玩得好高興!!
2020.02.18 星期二
23:01 阿羊 阿公阿嬤陪伴！！
爸爸媽媽的愛
幸福的小螞蟻`
};

const MEDIA_TYPE_ONE_IMAGE = "ONE_IMAGE";
const MEDIA_TYPE_MULTI_IMAGE = "MULTI_IMAGE";

const DAILY_MEDIA_TYPE = {
    "20190822-2": MEDIA_TYPE_MULTI_IMAGE,
    "20200214-2": MEDIA_TYPE_ONE_IMAGE
};

const DAILY_MEDIA_SOURCE = {
    "20190822-2": ["17201.jpg","17202.jpg","17203.jpg","17204.jpg","17205.jpg"],
    "20200214-2": ["S__43147276.jpg"]
};

export {
    RESOURCE_FILES_LOCATION,
    MEMBER_NAME_MAPPING,
    MEMBER_ICON_LOCATION,
    MEMBER_ICON_EXTENTION,
    DAILY_TITLE,
    DAILY_MESSAGE,
    DAILY_MEDIA_TYPE,
    DAILY_MEDIA_SOURCE
};