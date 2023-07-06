const AbstractManager = require("./AbstractManager");

class UserManager extends AbstractManager {
  constructor() {
    super({ table: "users" });
  }

  findByMail(email) {
    return this.database.query(`select * from  ${this.table} where email = ?`, [
      email,
    ]);
  }
}
module.exports = UserManager;
