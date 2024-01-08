import database from "../database_connection.js";


const createNewExpEntry = async (expData) => {
  try {
    const db = await database.connect();
    const collection = db.collection('expenses')
    const res = await collection.insertOne({
      ...expData
    })
    console.log(res);
    return res;
  } catch (error) {
    console.error(error.stack);
    throw error;
  } finally {
    database.close();
  }
}

const delEntryAtId = async (id) => {
  try {
    console.log('service',id);
    const db = await database.connect();
    // Replace 'your_collection_name' with the actual name of your collection
    const collection = db.collection('expenses');

    // Delete the document based on the provided ID
    const result = await collection.deleteOne({ _id: id });

    console.log('delService', result);
    return result;
    // if (result.deletedCount === 1) {
    //   res.status(200).json({ message: 'Element deleted successfully' });
    // } else {
    //   res.status(404).json({ message: 'Element not found' });
    // }
    // client.close();

  } catch (err) {
    console.error(err.stack);
    // res.status(500).json({ message: 'Internal Server Error' });
  }
  finally {
    database.close();
  }
}

const findAllExpEntries = async () => {
  try {
    console.log("finding --->");
    const db = await database.connect();
    const collection = db.collection("expenses");
    const result = await collection.find().toArray();
    console.log("found --->", result);
    return result;
  } catch(error) {
    console.log(error.message);
  } finally {
    database.close();
  }
}

export { createNewExpEntry, delEntryAtId, findAllExpEntries };