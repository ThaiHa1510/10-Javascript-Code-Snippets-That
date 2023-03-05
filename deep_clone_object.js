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

// create a random string of given length
function randomString(length) {
    let result = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

// compare two objects
function compareObjects(obj1, obj2) {
    if (Object.keys(obj1).length !== Object.keys(obj2).length) {
        return false;
    }
    for (const key in obj1) {
        if (obj1[key] !== obj2[key]) {
            return false;
        }
    }
    return true;
}


// get data from local storage
function getDataFromLocalStorage() {
    const data = localStorage.getItem('data');
    if (data) {
        return JSON.parse(data);
    } else {
        return [];
    }
}

// get data from a remote server
function getDataFromServer() {
    return fetch('https://thaiha1510@github.com/ThaiHa1510/10-Javascript-Code-Snippets-That.git')
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('data', JSON.stringify(data));
            return data;
        });
}

// make delete request to server
function deleteDataFromServer(id) {
    return fetch(`https://thaiha1510@github.com/ThaiHa1510/10-Javascript-Code-Snippets-That.git/${id}`, {
        method: 'DELETE'
    })
        .then(response => response.json())
        .then(data => {
            localStorage.setItem('data', JSON.stringify(data));
            return data;
        });
}

// append html to the DOM
function appendHtml(id, html) {
    const element = document.getElementById(id);
    element.innerHTML = html;
}

// delete dom element of id from DOM
function deleteDomElement(id) {
    const element = document.getElementById(id);
    element.remove();
}

// destrucutre object
function destructObject(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            delete obj[key];
        }
    }
    return obj;
}

// deep copy a objeect
function deepCopy(obj) {
    if (obj === null || typeof obj !== "object") {
        return obj;
    }
    let copy = Array.isArray(obj)?[]:{};
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            copy[key] = deepCopy(obj[key]);
        }
    }
    return copy;
}
