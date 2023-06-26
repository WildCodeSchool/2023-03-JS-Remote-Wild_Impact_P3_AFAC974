const user = {
  email: "test@test.com",
  password: "WildCodeSchool",
};
const login = (req, res) => {
  if (user.email === req.body.email && user.password === req.body.password) {
    res.status(200).json({ msg: "Connected" });
  } else {
    res.status(401).json({ msg: "Wrong credentials" });
  }
};

module.exports = {
  login,
};
