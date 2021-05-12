//Find the largest number of an array.
const array1 = [1, 3, 2];
console.log(Math.max(...array1));

// String reverse
let str="test";
//basic string reverse
let str_reverse = str.split("").reverse().join("");
// using loop 
function reverse_loop(string){
  let new_string="";
  let index_loop=string.length-1;
  for(index_loop;index_loop >=0;index_loop--){
    new_string+=str[index_loop];
  }
  return new_string;
}
str_reverse= reverse_loop(str);

// reverse using recursion function
function reverse(string) {
  if (string === "")
    return "";
  else
    return reverse(string.substr(1)) + string.charAt(0);
}
console.log(reverse('shoaib'));

/// Most repeat in array
function mostRepeated(array){
    return array.sort((a,b) =>
          array.filter(v => v===a).length
        - array.filter(v => v===b).length
    ).pop();
}
//Swap value
let a = 50, b = 16;
[a, b] = [b, a];
console.log(a,b);

// Function chaining
var object = {
  res: 0,
  add: function(a, b) {
    this.res = a + b; 
    return this;
  },

  multiply: function(a) {
    this.res = this.res * a;
    return this;
  } 
};

object.add(5, 10).multiply(10)
console.log(object.res)
