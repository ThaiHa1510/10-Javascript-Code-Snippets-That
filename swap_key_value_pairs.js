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

// using Object from entries and object entries
function swapKeyAndValue2(obj){
    return Object.fromEntries(Object.entries(obj).map((item) => item.reverse()));
}