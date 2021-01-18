import mongoose from "mongoose";
import config from "./config.js";

const MONGODB_URI = `mongodb+srv://${config.MONGODB_HOST}/${config.MONGODB_DATABASE}`;

mongoose
    .connect(MONGODB_URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        useFindAndModify: false,
        useCreateIndex: true,
    })
    .then((db) => console.log("Mongodb is connected to", db.connection.host))
    .catch((err) => console.error(err));
