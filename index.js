const express = require("express");
const app = express();
const jwt = require("jsonwebtoken");
const cors = require("cors");
require("dotenv").config({ path: "./.env" });
const {
  addUser,
  getUsers,
  validateCredentials,
} = require("./controller/usuarios");
const { getToken } = require("./helpers/HelperUsuario");

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

app.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;
    await validateCredentials(email, password);
    const token = jwt.sign({ email }, process.env.SECRET);
    res.send(token);
  } catch (error) {
    console.log(error);
    res.status(error.code || 500).send(error);
  }
});

app.get("/usuarios", async (req, res) => {
  const { email } = jwt.decode(getToken(req.header("Authorization")));
  try {
    const users = await getUsers(email);
    res.send(users);
  } catch (error) {}
});

app.get("*", (req, res) => {
  res
    .status(404)
    .json({ message: "the path you are trying to access does not exist" });
});

app.listen(PORT, console.log(`Server is running on the port : ${PORT}}`));
