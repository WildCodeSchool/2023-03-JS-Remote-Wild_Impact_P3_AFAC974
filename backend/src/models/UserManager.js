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

  insert(email, password) {
    return this.database.query(
      `insert into ${this.table} (email, hashed_password) values (?, ?)`,
      [email, password]
    );
  }

  update(user) {
    return this.database.query(
      `update ${this.table} set email = ?, firstname = ? where id = ?`,
      [user.email, user.firstname, user.id]
    );
  }
}
module.exports = UserManager;
