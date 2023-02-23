function count(arr){
    let result={};
    arr.forEach(element => {
        if(result[element] == undefined){
            result[element]=1;
        }
        else{
            result[element]++;
        }
    });
    return result;
}
let arr = [1,2,3,4,5,6,3,2,4,4];
console.log(count(arr))
