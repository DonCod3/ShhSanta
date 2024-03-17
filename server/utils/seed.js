const connection = require('../config/connection');
const { user, Exchange } = require('../models');
const { collection } = require('../models/User');
const { getRandomName, getRandomExchanges } = require('./data');

const seedDatabase = async () => {
    // Clear the database
    await user.deleteMany({});
    await Exchange.deleteMany({});
};

seedDatabase();


connection.once('open', async () => {
    let exchangeCheck = await connection.db.listCollections({ name: 'exchange' }).toArray();
    if (exchangeCheck.lengths) {
        await connection.dropCollection('exchange');
    }

    let userCheck = await connection.db.listCollections({ name: 'user' }).toArray();
    if (userCheck.length) {
        await connection.dropCollection('user');
    }

    //create empty array to hold users
    const users = [];

    //Loop 20 times -- add users to array
    for (let i = 0; i < 5; i++) {
        // Get some random exchanges
        const exchanges = getRandomExchanges(5);
    
        const fullName = getRandomName(5);
        const [firstName, lastName] = fullName.split(' ');
        const phone = Math.floor(Math.random() * 10000000000);
        //generate a random email
        const email = `${firstName}.${lastName}@gmail.com`;
        //generate a random password
        const password = 'password123';
        //push user to array
        users.push({ firstName, lastName, phone, email, password, exchanges });
    };

    await user.collection.insertMany(users);

    await Exchange.collection.insertMany(getRandomExchanges(10));

    console.log('Data seeded!');
    process.exit(0);
});

// seedDatabase();