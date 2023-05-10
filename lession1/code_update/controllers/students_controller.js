const connectMongoDB = require('../config/db');
const { ObjectId } = require('mongodb');

const read = async (reqBody, res) => {
    try {
        const db = await connectMongoDB();
        const result = await db.collection('students').find({}).toArray();
        return res.status(200).send(result);
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

const create = async (reqBody, res) => {
    try {
        const db = await connectMongoDB();
        result = db.collection('students').insertOne({ name: reqBody.name, age: reqBody.age });

        return res.status(200).send(result);
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

const update = async (reqBody, res) => {
    try {
        const db = await connectMongoDB();
        const result = await db.collection('students').findOneAndUpdate(
            { _id: new ObjectId(reqBody.id) },
            { $set: { name: reqBody.name, age: reqBody.age } }
        );

        return res.status(200).send({ message: 'successful.' });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

const del = async (reqBody, res) => {
    try {
        const db = await connectMongoDB();
        const result = await db.collection('students').findOneAndDelete({ _id: new ObjectId(reqBody.id) },);
        return res.status(200).send({ message: 'successful.' });
    }
    catch (err) {
        return res.status(500).send({ message: err.message });
    }
}

module.exports = { read, create, update, del };