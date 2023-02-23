'use strict'

// remove duplicate object in array incorrect with object

const arr = [{id: 1}, {id: 2}, {id: 1}, {id: 3}];

const uniqueArr = [...new Set(arr)];

// remove duplicate objects based on specific properties of those objects
const array = [{id: 1, name: "John"}, {id: 2, name: "Mary"}, {id: 1, name: "Mike"}, {id: 3, name: "Mark"}];

let uniqueArray = array.filter((value,index,self)=>
    self.findIndex(item=> item.id == value.id) == index
)

/// using reduce 
const array1 = [{id: 1, name: "John"}, {id: 2, name: "Mary"}, {id: 1, name: "Mike"}, {id: 3, name: "Mark"}];

const uniqueArray1 = array.reduce((acc, obj) => {
  acc[obj.id] = (acc[obj.id] || 0) + 1;
  if (acc[obj.id] === 1) {
    acc.result.push(obj);
  }
  return acc;
}, {result: []});
console.log(uniqueArray1)
// console.log(uniqueArray.result);
// console.log("remove duplicate objects based on specific properties of those objects")
// console.log(uniqueArray)

// console.log("///////")
// console.log("remove duplicate object in array")
// console.log(uniqueArr)