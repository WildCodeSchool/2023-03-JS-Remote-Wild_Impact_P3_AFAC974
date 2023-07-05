const models = require("../models");

const add = (req, res) => {
  const user = req.body;

  // TODO validations (length, format...)

  models.user
    .insert(user)
    .then(([result]) => {
      res
        .location(`/users/${result.insertId}`)
        .status(201)
        .json({ id: result.insertId, user });
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  add,
};
