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
app.use(express.json({ linit: "16kb" }));
app.use(express.urlencoded({ extended: true, limit: "16kb" }));
app.use(express.static("public"));
app.use(cookieParser());

export { app };
