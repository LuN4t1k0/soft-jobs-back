const {Pool} = require("pg")

//registrar usuarios
//email, password, rol, lenguaje

//iniciar sesion
//email, password


//al iniciar sesion devuelve los datos del usuario
//obtenerUsuarios

const addUser = async (email, password, rol, lenguaje) => {
  const query = "INSERT INTO usuarios VALUES (DEFAULT, $1, $2, $3, $4)"
  const values = [email, password, rol, lenguaje]
  const {rows: newUser} = await pool.query(query, values)
  return newUser;

}

module.exports = {
  addUser
}