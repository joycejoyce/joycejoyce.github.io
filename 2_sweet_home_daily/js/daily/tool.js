import {
    Exception
} from './exception.js';
import {
    ERR_ASSERT_FAIL
} from './constants.js';

function Check() {}
Check.lengthesEqual = function(array1, array2) {
    return array1.length === array2.length;
};

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