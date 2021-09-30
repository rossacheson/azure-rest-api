const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId;

module.exports = async function (context, req) {

    const connection = await MongoClient.connect(process.env.MONGODB_URL);
    const todoCollection = connection.db(process.env.MONGODB_DATABASE_NAME)
                                     .collection(process.env.MONGODB_COLLECTION_NAME);

    const results = await todoCollection.findOne(ObjectId(req.params.id));

    await connection.close();

    return {
        body: JSON.stringify(results).replace(/_id/g, "id")
    };
}
