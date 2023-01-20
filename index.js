const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });

const PORT = process.env.PORT;

app.arguments(cors());
app.arguments(express.json());

app.get("*", (req, res) => {
  res
    .status(404)
    .json({ message: "the path you are trying to access does not exist" });
});

app.listen(
  PORT,
  console.log(`El servidor esta corriendo en el puerto ${PORT}}`)
);
