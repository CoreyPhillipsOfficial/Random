// SPREAD OPERATOR

/*
// 1. Spreading arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1]; // Copy of arr1
console.log(arr1);
console.log(arr2);

// useful because you avoid mutating the original array
const fruits = ['apple', 'banana'];
const moreFruits = ['orange', ...fruits, 'kiwi'];
console.log(moreFruits);




// 2. Merging arrays
const arrOne = [1, 2];
const arrTwo = [3, 4];
const merged = [...arrOne, ...arrTwo]; // [1, 2, 3, 4]
console.log(merged);

// practice:
const frontend = ['HTML', 'CSS'];
const backend = ['Node.js', 'Express'];
const fullstack = [...frontend, ...backend];
console.log(fullstack);




// 3. Spreading in function calls
const nums = [1, 2, 3];
Math.max(...nums); // 3

const values = [5, 9, 2, 1];
console.log(Math.min(...values));
*/





// Add elements of existing array into a new array
const fruits = ['apple', 'banana'];
const allFruits = ['orange', ...fruits, 'mango'];
console.log(allFruits); // [ 'orange', 'apple', 'banana', 'mango' ]


// Pass elements of an array as arguments to a function
function addThreeNumbers(a, b, c) {
    console.log(a + b + c);
}
const args = [1, 2, 3];
addThreeNumbers(...args); // 6

// Copy arrays
const arr1 = [1, 2, 3];
const arr2 = [...arr1];
arr2.push(4);
console.log(arr1);
console.log(arr2);


// Concatenate arrays
const firstArray = [0, 1, 2];
const secondArray = [3, 4, 5];
console.log(firstArray.concat(secondArray)); // [ 0, 1, 2, 3, 4, 5 ]

bothArrays = [...firstArray, ...secondArray];
console.log(bothArrays); // [ 0, 1, 2, 3, 4, 5 ]




// REST: Condense multiple elements into an array
function multiply(multiplier, ...theArgs) {
    return theArgs.map(function (element) {
        return , ultiplier * element;
    });
};

const multiplyArray = multiply(2, 0, 1, 2, 3)
console.log(multiplyArray);
