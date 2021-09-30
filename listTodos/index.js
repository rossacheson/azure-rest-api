const MongoClient = require('mongodb').MongoClient;

module.exports = async function (context, req) {

    const URL = 'mongodb://cosmos-db-todos-rda:uX2BF3GA2SaLQl5aZbLsBUJNO8CF9D25Hzl4nZvznZv1pbk3DK7hVVV20vFasUETzLGDw7TcVBuqlM1h8DLHNQ%3D%3D@cosmos-db-todos-rda.mongo.cosmos.azure.com:10255/?ssl=true&replicaSet=globaldb&retrywrites=false&maxIdleTimeMS=120000&appName=@cosmos-db-todos-rda@'; // process.env.MONGODB_URL;
    const DATABASE_NAME = 'serverless'; // process.env.MONGODB_DATABASE_NAME;
    const COLLECTION_NAME = 'todos'; //process.env.MONGODB_COLLECTION_NAME;

    const connection = await MongoClient.connect(URL);
    const todoCollection = connection.db(DATABASE_NAME).collection(COLLECTION_NAME);

    const results = await todoCollection.find({}).toArray();

    return {
        // status: 200, /* Defaults to 200 */
        body: JSON.stringify(results)
    };
}