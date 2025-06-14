const {
    MongoClient
} = require('mongodb');

const url = `mongodb+srv://shankhwarsumit117:g911cCyAywMgjika@sumitdb.r1aimze.mongodb.net/`;

const client = new MongoClient(url);

const dbName = 'user1';

async function run() {
    try {

        await client.connect();
        console.log('connected successfully to server');
        const db = client.db(dbName);
        const collection = db.collection('usercollection');

        const countResult = await collection.countDocuments({});
        console.log(countResult);

        const findResult = await collection.find({}).toArray();
        console.log('found documents =>', findResult);

        return "done";
    } catch (error) {
        console.log(error);
    }
}

run()
    .then(console.log)
    .catch(console.error)
    .finally(() => client.close());