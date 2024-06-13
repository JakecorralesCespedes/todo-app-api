import express from "express";
import todoapp from "./routes/todo.routes.js";

const app = express();

app.use(express.json());

app.use("/api", todoapp);

app.listen(3000);
console.log("Server on port", 3000);
