import express from "express"
import bodyParser from "body-parser";
import cors from "cors"
import schoolRoute from "./routes/school.routes.js"

// Initializations
const app = express();

// Parse application/json
app.use(bodyParser.json());
app.use(cors());

// Settings
app.set("port", 8080);

// Routes
app.use("/api/school", schoolRoute);

// define a route handler for the default home page
app.get("/", (req, res) => {
    res.send("School Management Dashboard..!");
});

// Data Validation Custom Response
app.use((err, req, res, next) => {
    if (err && err.error && err.error.isJoi) {
        res.status(400).json({
            errors: err.error.details.map((error) => {
                return {
                    key: error.path[0],
                    message: error.message,
                };
            }),
            message: "Data Validation Failed",
            success: false,
        });
    } else {
        next(err);
    }
});

// Not Found
app.use((req, res) => {
    res.statusCode = 404;
    res.setHeader("Content-Type", "application/json");
    res.end("Not Found");
});

export default app;