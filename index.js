const express = require("express");
// import express from "express";
const app = express();
const cors = require("cors");
const v1 = require("./router/v1");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res, next) => {
  res.status(200).json({ message: "Initial Route for firebase!!" });
});

app.use("/v1", v1);

app.listen(5000, () => {
  console.log("Server Started At : ", 5000);
});
