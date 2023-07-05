const AbstractManager = require("./AbstractManager");

class ArticleManager extends AbstractManager {
  constructor() {
    super({ table: "articles" });
  }

  insert(article) {
    return this.database.query(
      `insert into ${this.table} (name, url, works_id) values (?, ? ,?)`,
      [article.name, article.url, article.works_id]
    );
  }

  update(article) {
    return this.database.query(
      `update ${this.table} set name = ?, url = ?, works_id = ? where id = ?`,
      [article.name, article.url, article.works_id, article.id]
    );
  }
}

module.exports = ArticleManager;
