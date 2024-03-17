const names = [
  'Aaran',
  'john',
  'Jane',
  'Jack',
  'Jill',
  'Aaren',
  'Aarez', ,
  'Sarah',
  'Nathaniel',
  'Parker',
];

const exchangeNames = [
  'secret santa',
  'white elephant',
  'yankee swap',
  'dirty santa',
  'thieving elves',
  'rob your neighbor'
];

// Get a random item given an array
const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

// Function to generate random names that we can add to student object.

const getRandomName = () => {
  const firstName = names[Math.floor(Math.random() * names.length)];
  const lastName = names[Math.floor(Math.random() * names.length)];
  return `${firstName} ${lastName}`;
}

const getRandomExchanges = () => {
  const num = 5;
  const result = [];
  for (let i = 0; i < num; i++) {
    let exchangeName = exchangeNames[Math.floor(Math.random() * exchangeNames.length)];
    // Check if result already includes exchangeName
    while (result.find(exchange => exchange.exchangeName === exchangeName)) {
      // If it does, get a new random exchangeName
      exchangeName = exchangeNames[Math.floor(Math.random() * exchangeNames.length)];
    }
    result.push({ exchangeName });
  }
  return result;
}
// Export the functions for use in seed.js
module.exports = { getRandomName, getRandomExchanges };

