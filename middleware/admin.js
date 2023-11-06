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
  } else {
    try {
      const decoded = jwt.verify(token, "gocab.transit.logistics");
      req.user = decoded;
      if (req.user.admin) next();
      else throw new Error("Unauthorized to access this page");
    } catch (err) {
      console.log(err);
      res.status(401).json({ msg: err.message });
    }
  }
};

module.exports = verifyToken;
