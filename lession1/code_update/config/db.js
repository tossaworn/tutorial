const MongoClient = require('mongodb').MongoClient;

const url = 'mongodb://root:123456789@mongo:27017/lession1?authSource=admin';

const client = new MongoClient(url, { useNewUrlParser: true });

module.exports = async function connectMongoDB() {
    try {
        await client.connect();
        console.log("Connected successfully to server");
        const db = client.db();
        return db;
    } catch (err) {
        console.log(err.stack);
    }
};