const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const token = req.header("x-auth-token");
  if (!token) {
    res.send("auth denied");
  }
  try {
    const decoded = jwt.verify(token, "hello");
    req.user = decoded;
    next()
  } catch (error) {
    res.send("error occoured");
  }
};
module.exports = auth