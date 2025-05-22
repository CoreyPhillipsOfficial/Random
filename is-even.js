/*
function isEven(n) {
    if (typeof n !== 'number' || Number.isNaN(n)) {
        return 'You must input a number'
    }

    return `The number ${n} is ${n % 2 === 0 ? 'even' : 'odd'}`
}
*/



// This version is more scalable, and uses early return
function isValidNumber(n) {
    return typeof n === 'number' && !Number.isNaN(n);
}

function isEven(n) {
    if (!isValidNumber(n)) return 'You must input a number';
    return `The number ${n} is ${n % 2 === 0 ? 'even' : 'odd'}`
}




console.log(isEven(4));
console.log(isEven(9));
console.log(isEven(98765678987676));
console.log(isEven('Wait, what do I input??'));
