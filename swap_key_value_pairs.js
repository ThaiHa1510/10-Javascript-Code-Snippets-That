'use strict'
// swap key and value of object
function swapKeyAndValue(obj) {
    const newObj = {};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            newObj[obj[key]] = key;
        }
    }
    return newObj;
}