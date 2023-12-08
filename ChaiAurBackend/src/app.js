import express from "express";
import CORS from "cors";
import cookieParser from "cookie-parser";

const app = express();

app.use(
  CORS({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
  })
);

// Main configuration files according to express
app.use(express.json({ limit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

// Routes import
import userRouter from "./routes/user.routes.js";

// routes declaration
app.use("/api/v1/users", userRouter);

// http://localhost:8000/api/v1/users/register
export { app };
