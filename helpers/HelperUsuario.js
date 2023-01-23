const bcrypt = require("bcryptjs");

const encryptPassword = (password) => {
  let encryptedPassword = bcrypt.hashSync(password);
  return encryptedPassword;
};

const comparePassword = async (password1, password2) => {
  const compare = await bycript.compareSync(password1, password2);
  return compare;
};

module.exports = {
  encryptPassword,
  comparePassword,
};
