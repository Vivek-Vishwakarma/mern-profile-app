const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  try {
    const token = req.header("x-auth-token");
    if (!token) {
      return res.status(401).send("auth denied");
    }
    const decoded = jwt.verify(token, "hello");
    req.user = decoded.id;
    console.log(req.user)
    next()
  } catch (error) {
    res.send("error occoured");
  }
};
module.exports = auth