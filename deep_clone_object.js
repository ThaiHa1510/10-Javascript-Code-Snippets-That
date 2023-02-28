const _ = require('lodash');
// use cloneDeep in lodash
(    function(){
    const calendarEvent ={
        source:"https://thaiha1510@github.com/ThaiHa1510/10-Javascript-Code-Snippets-That.git",
        date: new Date(123),
        attendees:["Thaiha1510"]
    }
    const cloneObj = _.cloneDeep(calendarEvent)
    console.log(typeof cloneObj.date)
})()

function deepClone(obj){
    if(!obj || typeof obj !== "object"){
        return obj;
    }
    let clone = Array.isArray(obj)?[]:{};
    for(const key in obj){
        if(obj.hasOwnProperty(key)){
            clone[key] = obj[key] instanceof  Date? new Date(obj[key].getTime()):deepClone(obj[key]);
        }
    }
    return clone;
}

const original = { a: 1, b: { c: new Date() } };

let clone = deepClone(original);

// Output: {a: 1, b: {c: 2022-12-31T08:00:00.000Z}}

clone.b.c=new Date(123);

console.log(clone);
console.log(original);