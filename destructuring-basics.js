/*
// array destructuring
const numbers = [1, 2, 3];
const [a, b, c] = numbers;
console.log(a); // 1

// object destructuring
const user = { name: 'Corey', from: 'NJ' };
const { name, from } = user;
console.log(name); // 'Corey'

// rename while destructuring
const { name: firstName } = user;
console.log(firstName); // 'Corey'

// set default values
const { role = 'guest' } = user;
console.log(role); // guest
*/

/*
// Drill 1
const [x, y = 100, z] = [50]
console.log(x, y, x); // 50 100 undefined

// Drill 2
const user = { username: 'Corey', isAdmin: false };
const { username, role = 'guest' } = user;
console.log(username, role); // Corey guest

// Drill 3
const settings = { theme: { color: 'blue' } };
const { theme: { color, font = 'Arial' } } = settings;
console.log(color, font); // blue Arial
*/



//-----------------------------------------------------------------------

// Destructuring in real world examples:

// ✅ 1. Function Parameters
// You can destructure right in the parameter list:
function greet({ name, age }) {
    console.log(`Hey ${name}, you're ${age} years old.`);
}

const userFirst = { name: "Corey", age: 35 };
greet(userFirst); // Hey Corey, you're 35 years old.

// 💡 Why? Cleaner than user.name, user.age inside the function.


// ✅ 2. Loops with Destructuring
// When looping over an array of objects:
const people = [
    { name: "Corey", role: "Engineer" },
    { name: "Jess", role: "Designer" },
];

for (const { name, role } of people) {
    console.log(`${name} is a ${role}`);
}
// Output:
// Corey is a Engineer
// Jess is a Designer


//✅ 3. Rest + Spread with Destructuring
const user = { id: 1, name: "Corey", age: 35, email: "corey@example.com" };

const { name, ...rest } = user;
console.log(name);  // "Corey"
console.log(rest);  // { id: 1, age: 35, email: "corey@example.com" }

/*
// 🔥 BONUS: React Props
// In React, destructuring is everywhere:
function Profile({ name, bio }) {
    return <div>{name}: {bio}</div>;
}

// Or nested:
function Post({ post: { title, body } }) {
    return <h1>{title}</h1>;
}
*/



function display({ product, price }) {
    console.log(`${product} costs $${price}`);
}

display({ product: "Laptop", price: 999 });
// This logs:
// Laptop costs $999


const fruits = [
    { name: "Apple", color: "red" },
    { name: "Banana", color: "yellow" },
];

for (const { name } of fruits) {
    console.log(name);
}
// This logs:
// Apple
// Banana

/*
// Fix the error:
function greet({ firstName, lastName }) {
  console.log(`Hello, ${firstName} ${lastName}`);
}

const user = { firstName: "Corey", lastName: "Phillips" };
greet(user);
*/


/*
Array destructuring is based on position

Object destructuring is based on key name

You can use default values

Destructuring works great in:

Function parameters

Loops

Nested structures

REST/SPREAD syntax

It's everywhere in frameworks like React
*/


/*
// Quick Takeaways

// Array
const [a, b = 2] = [1]; // a = 1, b = 2

// Object
const { x = 0, y } = { y: 5 }; // x = 0, y = 5


// Nested
const { meta: { version } } = { meta: { version: 1 } };

// Function Params
function show({ title }) {
  console.log(title);
}
// Rest
const { a, ...rest } = { a: 1, b: 2, c: 3 }; // rest = { b: 2, c: 3 }
*/