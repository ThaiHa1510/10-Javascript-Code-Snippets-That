// convert array of objects into an object
function convertArrayOfObjectsToObject(arrayOfObjects) {
    return arrayOfObjects.reduce((obj, item) => {
        if (obj[item.key]) {
            obj[item.key].push(item.value);
        } else {
            obj[item.key] = [item.value];
        }
        return obj;
    }, {});
}

const arr=[
    {
        key: 'age',
        value: 30
    },
    {
        key: 'age',
        value: 25
    },
    {
        key: 'income',
        value: 2000
    }
]

console.log(convertArrayOfObjectsToObject(arr));

