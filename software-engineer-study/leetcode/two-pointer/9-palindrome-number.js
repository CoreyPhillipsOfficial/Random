/*
9. Palindrome Number

Given an integer x, return true if x is a palindrome, and false otherwise.

 

Example 1:

Input: x = 121
Output: true
Explanation: 121 reads as 121 from left to right and from right to left.
Example 2:

Input: x = -121
Output: false
Explanation: From left to right, it reads -121. From right to left, it becomes 121-. Therefore it is not a palindrome.
Example 3:

Input: x = 10
Output: false
Explanation: Reads 01 from right to left. Therefore it is not a palindrome.
 

Constraints:

-231 <= x <= 231 - 1
*/

// First solution:

// function isPalindrome(x) {
//     // turn number into string
//     let str = x.toString()

//     // reverse number
//     let reverse = str.split('').reverse().join('')

//     // compare to input
//     return reverse === str
// }


// Refactored:
function isPalindrome(x) {
    return x.toString() === x.toString().split('').reverse().join('')
}

// console.log(isPalindrome(121));
// console.log(isPalindrome(10));






// Follow up: Could you solve it without converting the integer to a string?
/*
function isPalindromeNoString(x) {
    if (x < 0 || (x % 10 === 0 && x !== 0)) return false; // negative numbers and numbers ending in 0 aren't palindromes

    let reversedHalf = 0;

    // keep reversing digits until we've reversed half the number
    while (x > reversedHalf) {
        const lastDigit = x % 10; // get the last digit
        reversedHalf = reversedHalf * 10 + lastDigit; // add that digit to the reversed half
        x = Math.floor(x / 10); // if reversedHalf is more than half, it's an odd number of digits, and we grop that middle digit
    }

    // for even length numbers, both halves should match
    // for odd length numbers, drop middle digit using Math.floor(reversedHalf / 10)
    return x === reversedHalf || x === Math.floor(reversedHalf / 10);
}

console.log(isPalindromeNoString(121));
console.log(isPalindromeNoString(10));
*/



function isPalendromeNoString(n) {
    // if n is negative or ends in 0 but isn't 0, return false
    if (n < 0 || n % 10 === 0 && n !== 0) return false

    // initialize reversedHalf
    let reversedHalf = 0;

    // while n > reversedHalf: define lastDigit, add lastDigit to reversedHalf, take lastDigit off of n
    while (n > reversedHalf) {
        const lastDigit = n % 10;
        reversedHalf = reversedHalf * 10 + lastDigit;
        n = Math.floor(n / 10);
    }

    // return true/false
    return n === reversedHalf || n === Math.floor(reversedHalf / 10)
}

console.log(isPalendromeNoString(2332));
console.log(isPalendromeNoString(23432));
console.log(isPalendromeNoString(2));
console.log(isPalendromeNoString(-2));
console.log(isPalendromeNoString(12345));

