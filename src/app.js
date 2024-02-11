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

export default app