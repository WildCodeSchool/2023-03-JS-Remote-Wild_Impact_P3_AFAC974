const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "item" });
  }

  insert(article) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      article.title,
    ]);
  }

  update(article) {
    return this.database.query(
      `update ${this.table} set title = ? where id = ?`,
      [article.title, article.id]
    );
  }
}

module.exports = ArticleManager;
