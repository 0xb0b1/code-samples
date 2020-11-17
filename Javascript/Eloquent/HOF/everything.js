function every(array, test) {

    if (array.length == 0 || arr === undefined)
        return "Empty Array";

    for (let item of array) {
        if (!test(item)) {
            return false;
        }
    }
    return true;
}

function everySome(array, test) {

    if (array.length == 0 || array === undefined)
        return "Empty Array";

    return !array.some(element => !test(element));
}

console.log(everySome([1, 4, 5, 6, 22], n => n < 10));
