const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  let 
  encryptedPassword = bcrypt.hashSync(password)
  
  return encryptedPassword
}

module.exports = {
  encryptPassword
}