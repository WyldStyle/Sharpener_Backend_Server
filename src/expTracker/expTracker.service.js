import database from "../database_connection.js";


export const createNewExpEntry = async (expData) => {
  try {
    const collection = await database.connect();
    const res = await collection.insertOne({
      ...expData
    })
    console.log(res);
    return res;
  } catch(error) {
    console.error(error.stack);
    throw error;
  } finally {
    database.close();
  }
}