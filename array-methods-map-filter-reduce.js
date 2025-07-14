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



//________________________________________________________________________________________________________
/*
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
*/


//________________________________________________________________________________________________________
/*
const plugins = [
  { name: "LA-2A", type: "compressor", brand: "UAD", price: 149 },
  { name: "Pultec EQP-1A", type: "EQ", brand: "UAD", price: 129 },
  { name: "FabFilter Pro-Q3", type: "EQ", brand: "FabFilter", price: 179 },
  { name: "Valhalla Room", type: "reverb", brand: "Valhalla", price: 50 },
];

// 🧪 Task 1: Use reduce to get the total cost of all plugins
const costAllPlugins = plugins.reduce((accum, plugin) => accum + plugin.price, 0)

console.log(costAllPlugins);


// 🧪 Task 2: Use reduce to count how many plugins each brand has
const howManyEachBrand = plugins.reduce((accum, plugin) => {
  if (accum[plugin.brand]) {
    accum[plugin.brand] += 1
  } else {
    accum[plugin.brand] = 1
  }
  return accum;
}, {});

console.log(howManyEachBrand);

// OR

const howManyEachBrandRefactored = plugins.reduce((accum, plugin) => {
  accum[plugin.brand] = (accum[plugin.brand] || 0) + 1;
  return accum;
}, {});

console.log(howManyEachBrandRefactored);
*/


//________________________________________________________________________________________________________
// You’re building a simple backend script for a plugin dashboard to display stats and summaries from a producer’s plugin collection.
/*
const plugins = [
  { name: "LA-2A", type: "compressor", brand: "UAD", price: 149 },
  { name: "Pultec EQP-1A", type: "EQ", brand: "UAD", price: 129 },
  { name: "FabFilter Pro-Q3", type: "EQ", brand: "FabFilter", price: 179 },
  { name: "Valhalla Room", type: "reverb", brand: "Valhalla", price: 50 },
  { name: "RC-20", type: "saturation", brand: "XLN Audio", price: 99 },
  { name: "SketchCassette", type: "saturation", brand: "Aberrant DSP", price: 40 },
];

// 🧪 Task 1: Use filter to get all saturation plugins
const saturationPlugins = plugins.filter(plugin => plugin.type === 'saturation');
console.log(saturationPlugins);


// 🧪 Task 2: Use map to create a display list of plugin names and prices
// Format: "Plugin Name - $Price"
const pluginList = plugins.map(plugin => `${plugin.name} - $${plugin.price}`);
console.log(pluginList);


// 🧪 Task 3: Use reduce to calculate the total spent on plugins
const totalSpentOnPlugins = plugins.reduce((acc, curr) => acc + curr.price, 0);
console.log(totalSpentOnPlugins);



// 🧪 Task 4: Use reduce to create an object that shows how many plugins each type has
const numberOfEachPluginType = plugins.reduce((acc, curr) => {
  // console.log("Current plugin:", curr.name);
  // console.log("Before:", JSON.stringify(acc));

  acc[curr.type] = (acc[curr.type] || 0) + 1
  // console.log("After:", JSON.stringify(acc));
  // console.log("------");

  return acc
}, {});
console.log(numberOfEachPluginType);


console.log('-----------------------------------');


const dog = { breed: "Labrador" };
const prop = "breed";
console.log(dog[prop]); // Should print "Labrador"

const user = {};
const field = "username";
user[field] = "coreyDev";
console.log(user); // Should print { username: "coreyDev" }

const counter = {};
const item = "saturation";
counter[item] = (counter[item] || 0) + 1;
console.log(counter); // { saturation: 1 }
*/

//________________________________________________________________________________________________________
// Track plugin sales across multiple producers. Help generate a quick stats dashboard from raw data.

const pluginSales = [
  { plugin: "LA-2A", producer: "Corey", price: 149 },
  { plugin: "Pultec EQP-1A", producer: "Mariquis", price: 129 },
  { plugin: "FabFilter Pro-Q3", producer: "Corey", price: 179 },
  { plugin: "Valhalla Room", producer: "Anna", price: 50 },
  { plugin: "RC-20", producer: "Mariquis", price: 99 },
  { plugin: "SketchCassette", producer: "Corey", price: 40 },
];

// 🔹 1. Use filter to get all sales made by Corey
const producerCorey = pluginSales.filter(plugin => plugin.producer === 'Corey')
console.log(producerCorey);

// 🔹 2. Use map to turn those sales into display strings like: "Corey sold LA-2A for $149"
const pluginSalesSentences = producerCorey.map(plugin => `${plugin.producer} sold ${plugin.plugin} for $${plugin.price}`)
console.log(pluginSalesSentences);

// 🔹 3. Use reduce to calculate the total revenue per producer
const totalRevPerProducer = pluginSales.reduce((acc, plugin) => {
  acc[plugin.producer] = (acc[plugin.producer] || 0) + plugin.price

  return acc
}, {})
console.log(totalRevPerProducer);



// 🔹 4. Use forEach to print each producer’s name and total revenue to the console, like:
// Corey earned $368
// Mariquis earned $228
// Anna earned $50

Object.entries(totalRevPerProducer).forEach(([producer, total]) => {
  console.log(`${producer} earned $${total}`);
});