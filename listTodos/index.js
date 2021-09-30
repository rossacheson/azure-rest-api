const MongoClient = require('mongodb').MongoClient;

module.exports = async function (context, req) {

    const URL = process.env.MONGODB_URL;
    const DATABASE_NAME = process.env.MONGODB_DATABASE_NAME;
    const COLLECTION_NAME = process.env.MONGODB_COLLECTION_NAME;

    const connection = await MongoClient.connect(URL);
    const todoCollection = connection.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const results = await todoCollection.find({ username: "in28minutes" }).toArray();

    return {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(results).replace(/_id/g, "id")
    };
}