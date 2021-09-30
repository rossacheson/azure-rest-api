const MongoClient = require('mongodb').MongoClient;

module.exports = async function (context, req) {

    const connection = await MongoClient.connect(process.env.MONGODB_URL);
    const todoCollection = connection.db(process.env.MONGODB_DATABASE_NAME)
                                     .collection(process.env.MONGODB_COLLECTION_NAME);

    const body = req.body;

    delete body.id;

    await todoCollection.insertOne(body);

    await connection.close();

    return {
        body: '{"message":"success"}'
    };

}