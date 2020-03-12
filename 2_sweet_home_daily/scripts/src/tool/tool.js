function Check() {}
Check.lengthesEqual = function(array1, array2) {
    return array1.length === array2.length;
};
Check.isCalledByNodeJS = function() {
    if(global === global.GLOBAL) {
        return true;
    }
    return false;
}

function Assert() {}
Assert.isTrue = function(statement) {
    if(!statement) {
        throw new Exception(ERR_ASSERT_FAIL);
    }
};

export {
    Check,
    Assert
};