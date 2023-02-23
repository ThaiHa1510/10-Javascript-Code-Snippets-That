let arr=[1,3,4,5,7,8,10]

function missing(arr){
    let missing=[];
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1] - arr[i] != 1){
            console.log("i:"+arr[i]);
            missing.push(arr[i]+1);
        }
    }
    return missing;
}
console.log(missing(arr));