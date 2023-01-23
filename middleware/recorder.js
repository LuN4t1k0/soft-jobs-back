const recorder = async (req, res, next) => {
  const endpoint = req.url;
  console.error(
    `con fecha : ${new Date()} se ha consultado el endpoint : ${endpoint} `
  );
  next();
};

module.exports = recorder;
