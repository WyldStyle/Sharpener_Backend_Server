import express from "express";
import dbConnection from "./database_connection.js";

const app = express()
app.get("/", (req, res) => {
  const data = {
    key: "Hello world"
  }
  res.status(200).json(data);
})
app.post
export default app