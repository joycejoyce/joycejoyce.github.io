function Member() {}
Member.getMemberIconSrc = function(memberName) {
    return MEMBER_ICON_LOCATION + MEMBER_NAME_MAPPING[memberName] + MEMBER_ICON_EXTENTION;
};

export {
    Member
};