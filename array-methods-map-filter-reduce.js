/*
const songs = [
    { title: 'offline', artist: 'koteon', duration: 91 },
    { title: 'keep me close', artist: 'Antent', duration: 180 },
    { title: 'Strings Attached', artist: 'Flint', duration: 170 },
]

// 🧪 Task 1: Use forEach to log a sentence for each song
songs.forEach(song => console.log(`The song ${song.title} by ${song.artist} is ${song.duration} seconds long.`))


// 🧪 Task 2: Use map to create an array of strings in this format:
const songDescriptions = songs.map(song => `The song ${song.title} by ${song.artist} is ${song.duration} seconds long.`)
console.log(songDescriptions);
*/



const plugins = [
    { name: "LA-2A", type: "compressor", brand: "UAD", price: 149 },
    { name: "Pultec EQP-1A", type: "EQ", brand: "UAD", price: 129 },
    { name: "FabFilter Pro-Q3", type: "EQ", brand: "FabFilter", price: 179 },
    { name: "Valhalla Room", type: "reverb", brand: "Valhalla", price: 50 },
];

// 🧪 Task 1: Use filter to get only UAD plugins
const onlyUad = plugins.filter(plugin => plugin.brand === 'UAD');

console.log(onlyUad);


// 🧪 Task 2: Use filter to get all plugins under $100
const underOnehundred = plugins.filter(plugin => plugin.price < 100);

console.log(underOnehundred);


// 🧪 Task 3: Use map to turn the UAD plugins from Task 1 into strings like:
const onlyUadSentence = onlyUad.map(plugin => `${plugin.name} (${plugin.price})`)

console.log(onlyUadSentence);

// filter returns only the elements that meet your condition. ap transforms every element into something new. 
// When you chain them, you first narrow down the data with filter, then shape it with map
// Using them together can allow you to take a large dataset, pick out just what you need, and format it exactly how you want: all in one smooth, readable line.