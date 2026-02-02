import express from "express";
import { ENV } from "./config/env.js";
import { connectDB } from "./config/db.js";
import cors from "cors";
import { clerkMiddleware } from "@clerk/express";
import userRoute from "./routes/user.route.js";
import postRoute from "./routes/post.route.js";

const app = express();

app.use(cors());
app.use(express.json());

app.use(clerkMiddleware());
app.get("/", (req, res) => res.send("hello from server"));

app.use("/api/users", userRoute);
app.use("/api/posts", postRoute);

//error handling middleware

app.use((err, req, res) => {
  console.error("Unhandled error:", err);
  res.status(500).json({ error: err.message || "Internal server error" });
});

const startServer = async () => {
  try {
    await connectDB();
    app.listen(ENV.PORT, () => console.log(`Server is running ${ENV.PORT}`));
  } catch (e) {
    console.error("failed to start server:", e.message);
    process.exit(1);
  }
};

startServer();
