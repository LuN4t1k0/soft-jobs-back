const pool = require("../config/pool");
const {
  encryptPassword,
  comparePassword,
} = require("../helpers/HelperUsuario");
const bcrypt = require("bcryptjs");

const addUser = async ({ email, password, rol, lenguage }) => {
  const encrypted = encryptPassword(password);
  const query = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)";
  const values = [email, encrypted, rol, lenguage];
  const { rows: newUser } = await pool.query(query, values);
  return newUser;
};

const validateCredentials = async (email, password) => {
  const values = [email];
  const query = "SELECT * FROM usuarios WHERE email = $1";
  const {
    rows: [usuario],
    rowCount,
  } = await pool.query(query, values);

  const { password: passwordEncriptada } = usuario;
  const passwordEsCorrecta = comparePassword(password, passwordEncriptada);
  console.log(rowCount);
  if (!passwordEsCorrecta || rowCount === 0)
    throw { code: 401, message: "Email o contraseña incorrecta" };
};

const getUsers = async (email) => {
  const values = [email];
  const query = "SELECT * FROM usuarios WHERE email = $1";
  const { rows: users } = await pool.query(query, values);
  const user = {
    email: users[0].email,
    rol: users[0].rol,
    lenguage: users[0].lenguage,
  };
  console.log(user);
  return user;
};

module.exports = {
  addUser,
  getUsers,
  validateCredentials,
};
