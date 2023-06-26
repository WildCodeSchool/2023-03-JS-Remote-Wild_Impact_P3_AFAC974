const AbstractManager = require("./AbstractManager");

class BiographyManager extends AbstractManager {
  constructor() {
    super({ table: "biography" });
  }

  insert(biography) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      biography.title,
    ]);
  }

  update(biography) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [biography.title, biography.id]
    );
  }
}

module.exports = BiographyManager;
