const AbstractManager = require("./AbstractManager");

class TechniqueManager extends AbstractManager {
  constructor() {
    super({ table: "techniques" });
  }

  insert(techniques) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      techniques.category,
    ]);
  }

  update(techniques) {
    return this.database.query(
      `update ${this.table} set name = ? where id = ?`,
      [techniques.name, techniques.id]
    );
  }
}

module.exports = TechniqueManager;
