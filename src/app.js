import express from "express";
import expenseRouter from "./expTracker/expTrackerRoutes.js";

const app = express();
app.use(express.json());

app.use('/exp', expenseRouter);

app.get("/", (req, res) => {
  const data = {
    key: "Hello world"
  }
  res.status(200).json(data);
})

// // Define a POST route
// app.post("/your-post-endpoint", (req, res) => {
//   // Handle POST request logic here
//   const requestData = req.body;
//   // Perform actions with the data
//   // Send a response back
//   res.status(200).json({ message: 'POST request successful' });
// });

// // Define a DELETE route
// app.delete("/your-delete-endpoint/:id", (req, res) => {
//   // Handle DELETE request logic here
//   const itemId = req.params.id;
//   // Perform actions with the item ID
//   // Send a response back
//   res.status(200).json({ message: `DELETE request successful for item with ID ${itemId}` });
// });

app.post;
app.delete;
export default app
