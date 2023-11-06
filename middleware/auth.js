const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const config = process.env;

const verifyToken = (req, res, next) => {
  const token =
    req.headers.authorization &&
    req.headers.authorization.replace("Bearer ", "");

  if (!token) {
    res.status(403).json({ msg: "A token is required for authentication" });
  }
  try {
    const decoded = jwt.verify(token, config.TOKEN_KEY);
    req.user = decoded;
    next();
  } catch (err) {
    res.status(401).json({ msg: "Invalid Token" });
  }
};

module.exports = verifyToken;
