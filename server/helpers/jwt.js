const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY

const signToken = (payload) => {
  return jwt.sign(payload, SECRET_KEY, {
    expiresIn: "12h",
  });
};

const verifyToken = (payload) => {
  return jwt.verify(payload, SECRET_KEY);
};

module.exports = {
  signToken,
  verifyToken,
};
