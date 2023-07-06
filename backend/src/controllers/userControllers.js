const models = require("../models");

const browse = (req, res) => {
  models.user
    .findAll()
    .then(([users]) => {
      res.status(200).send(users);
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};
const find = (req, res) => {
  models.user
    .findByMail(req.params.email)
    .then(([rows]) => {
      if (rows[0] == null) {
        res.sendStatus(404);
      } else {
        res.send(rows[0]);
      }
    })
    .catch((err) => {
      console.error(err);
      res.sendStatus(500);
    });
};

module.exports = {
  browse,
  find,
};
