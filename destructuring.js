const earnings = {
    Corey: 368,
    Mariquis: 228,
    Anna: 50
};

// 🔹 Question 1: Loop without destructuring
Object.entries(earnings).forEach(pair => {
    const producer = pair[0];
    const total = pair[1];
    console.log(`${producer} earned $${total}`);
});

console.log('--------------');

// 🔹 Question 2: Loop with destructuring
Object.entries(earnings).forEach(([producer, total]) => {
    console.log(`${producer} earned $${total}`);
});

console.log('--------------');

console.log(Object.entries(earnings))

// 🔹 Question 3: Explain it back: What does Object.entries(obj) return, and how does destructuring [producer, total] help?
// Object.entries(obj) returns an array with multiple arrays in it, one for each key-value pair in the object it's taking in. Destructuring gives us access to the elements in each array.