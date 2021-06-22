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
////////////////
#Conditionally Add Properties to Object
const condition=true;
const object = {
  id:1,
  name:'test',
  ...(condition && {age:25})
}

/////////////////////
#Check if a Property Exists in an Object 
# Use in operator to check properti exists in a object
const a = {'age':25,name:'test'};
console.log('id' in a);
console.log('name' in a);
//////////////////////////
# Dynamic name in object
# Just use the ['key_name'] notation to add the properties:
const dynamic = 'falvor';
const items ={
  age:25,
  [dynamic]:'chocolate'
}
//////////////////////////
# Object Destructuring With a Dynamic Key

# Frist , destructuring with aliases
const person ={'name':'test','age':25}
const {name:personName } =person;
console.log(personName);

# Seconds link dynamic name in object , 
  const templates = {
  'hello': 'Hello there',
  'bye': 'Good bye'
};
const templateName = 'bye';
const { [templateName]: template } = templates;
console.log(template) // returns 'Good bye'

/////////
# Nullish Coalescing, ?? Operator
const item ={name:'Joine Doe',age:21};
const id = item.id ?? '1'; # return 1;
const name = item.name ?? 'Default name'; # return Joine Doe;
const streets = item.address.street??'street'; # return errors

///////////////////////////////////////////////////////////////////
#  Optional chaining (?.)

const person ={name:'Joe Doe ',age:22};
consote street = person.addrress?.street; # return undefined

# Boolean Conversion Using the !! Operator
# Convert value undefied  , null ,
const greeting = 'Hello there!';
console.log(!!greeting) // returns true
const noGreeting = '';
console.log(!!noGreeting); // returns false

///////////
#String and Integer Conversions
#Quickly convert a string to a number using the + operator like this:
const stringNumer = '123';
console.log(+stringNumer); // returns integer 123
console.log(typeof +stringNumer); // returns 'number'
//////
# Check Falsy Values in an Array
const myArray = [null, false, 'Hello', undefined, 0];
// filter falsy values
const filtered = myArray.filter(Boolean);
console.log(filtered); // returns ['Hello']
// check if at least one value is truthy
const anyTruthy = myArray.some(Boolean);
console.log(anyTruthy); // returns true
// check if all values are truthy
const allTruthy = myArray.every(Boolean);
console.log(allTruthy); // returns false

////////////////
# Flattening Arrays of Arrays
#There is a method flat on the prototype Array that lets you make a single array from an array of arrays:
const myArray = [{ id: 1 }, [{ id: 2 }], [{ id: 3 }]];
const flattedArray = myArray.flat(); 
// returns [ { id: 1 }, { id: 2 }, { id: 3 } ]
