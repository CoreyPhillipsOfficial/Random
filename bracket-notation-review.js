const movie = { title: "Inception", year: 2010 };
const key = "title";

console.log(movie[key]);

//________________________________________________________
const artist = {};
const prop = "genre";

artist[prop] = "Hip-Hop";

console.log(artist);

//________________________________________________________
const votes = {};
const choice = "YES";

votes[choice] = (votes[choice] || 0) + 1;

console.log(votes);

//________________________________________________________
const poll = {};
const option = "Maybe";

poll[option] = (poll[option] || 0) + 1;
poll[option] = (poll[option] || 0) + 1;

console.log(poll); // { Maybe: 2 }

//________________________________________________________
const user = { username: "coreyDev" };
const key2 = "username";

console.log(user.key2);       // undefined
console.log(user[key2]);      // coreyDev