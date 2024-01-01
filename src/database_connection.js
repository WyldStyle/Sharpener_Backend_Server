import { MongoClient } from 'mongodb';
// or as an es module:
// import { MongoClient } from 'mongodb'

// Connection URL
const url = 'mongodb+srv://wyldStyle:wyldStyle_123@cluster0.cmeq8hn.mongodb.net/?retryWrites=true&w=majority';
const client = new MongoClient(url);

// Database Name
const dbName = 'wyldDb';

async function main() {
  try {
    // Use connect method to connect to the server
    await client.connect();
    console.log('Connected successfully to server');
    const db = client.db(dbName);
    // const collection = db.collection('documents');
    
    // the following code examples can be pasted here...
    
    return db;
  } catch(error) {
    console.log(error.message, error.stack);
  }
}

const dbConnection = main();
console.log("DbConnection ---> ", dbConnection);
export default dbConnection;

// main()
//   .then(console.log)
//   .catch(console.error)
//   .finally(() => client.close());