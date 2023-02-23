function twoSum(arr, target) {
    let hash = {};
    var subs = [];
    arr.forEach((item) => {
        let diff = target -item;
        if(hash[diff] != undefined){
            subs.push([item,diff]);
        }
        hash[item.toString()]=diff;

    });
    return subs;
};

var arr= [1,7,3,5,6,8,2];
console.log(twoSum(arr,9));