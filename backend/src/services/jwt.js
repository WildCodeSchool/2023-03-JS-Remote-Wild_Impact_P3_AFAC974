const jwt = require("jsonwebtoken");

const privateKey = "masuperclesecretedefoliequiesttroplongue";

const createJwt = (payload) => {
  return jwt.sign(payload, privateKey, {
    expiresIn: "1h",
  });
};

const verifyToken = (token) => {
  return jwt.verify(token, privateKey);
};

const checkUser = (req, res, next) => {
  if (req.cookies.afac_token) {
    const token = verifyToken(req.cookies.afac_token);
    if (token) {
      req.token = token;
      next();
    } else {
      res.status(401).json({ msg: "Unauthorized" });
    }
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

const checkAdmin = (req, res, next) => {
  console.log(req.token)
  if (req.token.role === 1) {
    next();
  } else {
    res.status(401).json({ msg: "Unauthorized" });
  }
};

module.exports = { createJwt, checkUser, checkAdmin };
