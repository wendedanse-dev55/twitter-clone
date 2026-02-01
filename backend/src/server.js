import express from "express";
import {ENV} from "./config/env.js";
import {connectDB} from "./config/db.js";


const app = express();

app.get("/", (req, res) => res.send("hello from server"))




const startServer = async () => {
    try {
        await connectDB()
        app.listen(ENV.PORT, () => console.log(`Server is running ${ENV.PORT}`))
    } catch(e) {
        console.error("failed to start server:", e.message);
        process.exit(1)
    }
}

startServer()
