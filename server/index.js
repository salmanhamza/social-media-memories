import express from "express";

import dotenv from "dotenv";
import Connection from "./database/db.js";
const app = express();
dotenv.config();

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(process.env.PORT, () => console.log("app is running"));
