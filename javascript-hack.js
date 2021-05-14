# 9 JavaScript Hacks

#1 Quick Resizing and Emptying Arrays 
# Quick resizing array with change array.length
#Exampl
let a=[1,2,3,4];
a.length--;
console.log(a) # [1,2,3];
a.length++;
console.log(A) # [1,2,3,empty];
#Empty array
a.lenght=0;
console.log(a) # Empty


#Nullish Coalescing Operator
#Check null and set value
let a=null;
let c=a??'isNull';
console.log(a) #Isnull
let d=null;
let b =d||a||'test';
let e = d||b||'test1';#test
console.log(b);

#Merging Arrays
#Merging Arrays remove duplicate items
let arr1=[2,3,4,5];
let arr2=[5,6,7,8];
let arr3=[...arr1,...arr2];
#Or
arr3=arr1.concat(arr2.filter((item) => arr1.indexOf(item) < 0));
#Concat 2 array;
arr3= arr1.concat(arr2);
#Or merning using push 
arr1.push.apply(arr1,arr2) ;
#in Operator
const car = { make: 'Honda', model: 'Accord', year: 1998 };
console.log('make' in car);
// expected output: true
delete car.make;
if ('make' in car === false) {
  car.make = 'Suzuki';
}
console.log(car.make);
// expected output: "Suzuki"

#mandatory oprator
mandatory = () => {
  throw new Error('Missing parameter');
}

submitName= (name= mandatory()) => {
  return name;
}
