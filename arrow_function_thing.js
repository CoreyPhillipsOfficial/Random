const listOfNumbers = [];

const storeNumber = num => listOfNumbers.push(num);

const doYouHaveThisNumber = num => listOfNumbers.includes(num);

storeNumber(5)
storeNumber(7)

console.log(listOfNumbers);
console.log(doYouHaveThisNumber(7));
console.log(doYouHaveThisNumber(6));


const receivedNumbers = {};

const storeNumber2 = num => receivedNumbers[num] = true;

const doYouHaveThisNumber2 = num => receivedNumbers[num] === true;

storeNumber2(4)
storeNumber2(8)

console.log(receivedNumbers); // { '4': true, '8': true }
console.log(doYouHaveThisNumber2(4)); // true
console.log(doYouHaveThisNumber2(10)); // false

console.log(storeNumber2(4)); // true
console.log(storeNumber2(10)); // true

console.log(receivedNumbers); // { '4': true, '8': true, '10': true }





// If I want to show how many times a number exists:
const receivedMultipleNumbers = {}

const storeMultipleNumbers = num => {
    if (receivedMultipleNumbers[num]) {
        receivedMultipleNumbers[num]++
    } else {
        receivedMultipleNumbers[num] = 1
    }
}

const doYouHaveTheseNumbers = num => receivedMultipleNumbers[num] >= 1

storeMultipleNumbers(20)
storeMultipleNumbers(40)
storeMultipleNumbers(40)

console.log(receivedMultipleNumbers); // { '20': 1, '40': 2 }







// Return smallest number in an array and how many times it occurs
const array = [4, 2, 9, 3, 5, 1, 8, 1]

const findSmallestNumberAndCount = array => {
    const smallestNumber = Math.min(...array);
    const count = array.filter(num => num === smallestNumber).length;

    return { smallestNumber, count }
}

console.log(findSmallestNumberAndCount(array)); // { smallestNumber: 1, count: 2 }