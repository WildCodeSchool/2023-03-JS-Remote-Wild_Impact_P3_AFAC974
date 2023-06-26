const AbstractManager = require("./AbstractManager");

class SponsorManager extends AbstractManager {
  constructor() {
    super({ table: "sponsors" });
  }

  insert(sponsors) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      sponsors.name,
    ]);
  }

  update(sponsors) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [sponsors.name, sponsors.id]
    );
  }
}

module.exports = SponsorManager;
