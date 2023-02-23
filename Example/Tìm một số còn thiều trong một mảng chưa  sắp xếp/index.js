function missing(arr) {
    let l = arr.length;
    let sum = l + 1;
    let total = 0;
    for (let i = 0; i < l; i++) {
        sum = sum + i + 1;
        sum = sum - arr[i];
    }
    return sum;
}
let ar = [2, 1, 5, 3, 7, 6];
console.log(missing(ar));