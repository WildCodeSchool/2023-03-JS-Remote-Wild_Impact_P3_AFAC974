const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  insert(user) {
    return this.database.query(
      `insert into ${this.table} (firstname, email) values (?, ?)`,
      [user.firstname, user.email]
    );
  }
}

module.exports = UserManager;
