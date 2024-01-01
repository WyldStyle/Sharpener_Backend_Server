import app from "./src/app.js"
import dbConnection from "./src/database_connection.js";

app.listen(3001, async ()=>{
  await dbConnection; 
  console.log('server listening on port 3001');
})