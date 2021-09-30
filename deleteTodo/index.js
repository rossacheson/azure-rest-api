const MongoClient = require('mongodb').MongoClient;
const ObjectId = require('mongodb').ObjectId

module.exports = async function (context, req) {

    const connection = await MongoClient.connect(process.env.MONGODB_URL);
    const todoCollection = connection.db(process.env.MONGODB_DATABASE_NAME)
                                     .collection(process.env.MONGODB_COLLECTION_NAME);

    await todoCollection
        .deleteOne(
            { _id: ObjectId(req.params.id) }
        );

    await connection.close();

    return {
        body: '{"message":"success"}'
    };

}