import app from "./server.js";
import("./database.js");

// const express = require("express");
// const app = express();
// const port = 8080; // default port to listen

// Server is listening
app.listen(app.get("port"), () => {
    console.log("Server on port", app.get("port"));
});