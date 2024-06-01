import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import db from "./db/db.js";
import blogRoute from './api/routes.js'

const app = express();
const port = 5000;

app.use(bodyParser.json()); // Use JSON parsing middleware
app.use(express.static("public"));
app.use(cors());


app.use('/', blogRoute)

app.listen(port, async () => {
    await db.connect();
    console.log(`Listening to port ${port}`);
});
