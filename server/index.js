import express from "express";

import dotenv from "dotenv";
import Connection from "./database/db.js";
import postRoutes from "./Routes/route.js";
import bodyParser from "body-parser";
import cors from "cors";
const app = express();
dotenv.config();

app.use("/posts", postRoutes);
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const username = process.env.DB_USERNAME;
const password = process.env.DB_PASSWORD;
Connection(username, password);

app.listen(process.env.PORT, () => console.log("app is running"));
