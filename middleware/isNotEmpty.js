//a. Verificar la existencia de credenciales en la ruta que corresponda
//b. Validar el token recibido en las cabeceras en la ruta que corresponda
//c. Reportar por la terminal las consultas recibidas en el servidor

const isNotEmpty = async (req, res, next) => {
  try {
    if (!req.body.length) {
      throw { code: 406, message: "No se han detectado parametros" };
    }
    if (!body.includes("email")) {
      throw { code: 406, message: "debe incluir un email" };
    }
    if (!body.includes("password")) {
      throw { code: 406, message: "debe incluir un password" };
    }
    next();
  } catch (error) {
    res.status(error.code || 500).send(error);
  }
};

module.exports = {
  isNotEmpty,
};
