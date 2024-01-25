import express from "express";

const app = express();

app.use("/", (req, res) => {
  res.send(`<h1>E-commerce app</h1>`);
});

export { app };
