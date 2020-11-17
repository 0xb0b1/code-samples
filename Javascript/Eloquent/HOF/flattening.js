// Using for/of loop to flatten an array
function flattenArray(arr) {
    let newArray = []
    for (let item of arr) {
        for (let elem of item) {
            newArray.push(elem);
        }
    }
    return newArray;
}

// Using reduce and concat to flatten an array
function flattenArrayNew(arr) {
    return arr.reduce((flat, current) =>
        flat.concat(current), []);
}

console.log(flattenArrayNew([[1, 2, 3], [4, 5], [6]]));
