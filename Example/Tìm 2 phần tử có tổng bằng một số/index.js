function twoSub(arr, target) {
    let hash = {};
    var subs = [];
    arr.forEach((item) => {
            let diffSum = item + target;
            if (hash[diffSum] != undefined) {
                subs.push([item,diffSum]);
            }
            if (item >= target) {
                let diffSub = item - target;
                if (hash[diffSub] != undefined) {
                    subs.push([item, diffSub]);
                }
            }
            hash[item.toString()] = item;
    });
    return subs;
};

var arr= [1,2,3,5,6,8,4];
console.log(twoSub(arr,2));