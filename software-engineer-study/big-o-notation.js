// write a function that calculates the sum of all numbers from 1 up to (and including) some number n

function addUpTo(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}
console.log(addUpTo(4));


function addUpTo2(n) {
    return n * (n + 1) / 2
}
console.log(addUpTo2(4));





// let's measure their time performance

let t1 = performance.now();
// addUpTo(1000000000);
addUpTo2(1000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`);







// SPACE COMPLEXITY

function sumOfArray(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        total += arr[i];
    }
    return total;
}
// O(1) space ☝️




function double(arr) {
    let newArr = [];
    for (let i = 0; i < arr.length; i++) {
        newArr.push(2 * arr[i]);
    }
    return newArr;
}
// O() space ☝️