const express = require("express");
const app = express();
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const { addUser, getUsers } = require("./controller/usuarios");

const PORT = process.env.PORT;

app.use(cors());
app.use(express.json());

app.post("/usuarios", async (req, res) => {
  try {
    const user = req.body;
   
    await addUser(user);
    res.send({ message: "user created" });
  } catch (error) {
    res.status(500).json({ message: "no se puede crear usuario" });
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const users = await getUsers();
    res.send(users);
  } catch (error) {}
});

app.post("/usuarios/login", async (req, res) => {
  try {
  } catch (error) {}
});

app.get("*", (req, res) => {
  res
    .status(404)
    .json({ message: "the path you are trying to access does not exist" });
});

app.listen(PORT, console.log(`Server is running on the port : ${PORT}}`));
