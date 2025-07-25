const jwt = require("jsonwebtoken");

const auth = (req, res, next) => {
  const bearerHeader = req.headers.authorization;

  const token = bearerHeader.split(" ")[1];

  try {
    jwt.verify(token, process.env.JWT_SECRET);
    next();
  } catch (error) {
    return res.status(403).json({ message: "Token is invalid or expired" });
  }
};

module.exports = auth;
