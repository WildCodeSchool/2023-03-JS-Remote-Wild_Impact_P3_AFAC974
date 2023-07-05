const { hashPassword, checkPassword } = require("../services/auth");
const models = require("../models");
const { createJwt } = require("../services/jwt");

const signup = async (req, res) => {
  const hash = await hashPassword(req.body.password);
  models.users
    .insert(req.body.email, hash)
    .then(() => res.status(200).json({ msg: "User created" }))
    .catch((err) => {
      console.error(err);
      res.status(404).json({ msg: "Invalid user" });
    });
};

const login = async (req, res) => {
  const [user] = await models.users.findOne(req.body.email);

  if (
    user[0] &&
    (await checkPassword(user[0].hashed_password, req.body.password))
  ) {
    const token = createJwt({ email: req.body.email, role: "admin" });

    res
      .status(200)
      .cookie("blog_token", token, {
        httpOnly: true,
      })
      .json({ msg: "Connected" });
  } else {
    res.status(401).json({ msg: "Wrong credentials" });
  }
};

module.exports = {
  login,
  signup,
};