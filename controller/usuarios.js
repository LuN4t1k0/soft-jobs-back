const pool = require("../config/pool");
const { encryptPassword } = require("../helpers/HelperUsuario");
const bcrypt = require("bcryptjs");

const addUser = async ({ email, password, rol, lenguage }) => {
  const encrypted = encryptPassword(password);
  const query = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
  const values = [email, encrypted, rol, lenguage];
  const { rows: newUser } = await pool.query(query, values);
  return newUser;
};

const getUsers = async () => {
  const query = "SELECT * FROM usuarios";

  const { rows: users } = await pool.query(query);

  return users;
};

module.exports = {
  addUser,
  getUsers,
};
