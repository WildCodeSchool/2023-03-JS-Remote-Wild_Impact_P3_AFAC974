const AbstractManager = require("./AbstractManager");

class CategoriesManager extends AbstractManager {
  constructor() {
    super({ table: "categories" });
  }

  insert(categories) {
    return this.database.query(`insert into ${this.table} (name) values (?)`, [
      categories.name,
    ]);
  }

  update(categories) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [categories.title, categories.id]
    );
  }
}

module.exports = CategoriesManager;
