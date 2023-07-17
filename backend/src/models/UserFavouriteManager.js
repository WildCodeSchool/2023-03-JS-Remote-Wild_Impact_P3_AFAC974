const AbstractManager = require("./AbstractManager");

class UserFavouriteManager extends AbstractManager {
  constructor() {
    super({ table: "user_favourites" });
  }

  findFavouritesuser() {
    return this.database.query(
      `
        SELECT summary_title, image_src, image_alt, user_favourites.works_id, user_favourites.users_id
        FROM works
        INNER JOIN  user_favourites on works.id = user_favourites.works_id
        INNER JOIN users on users.id = user_favourites.users_id;          
      `,
      []
    );
  }

  insert(favourites) {
    return this.database.query(`insert into ${this.table} (title) values (?)`, [
      favourites.title,
    ]);
  }
}

module.exports = UserFavouriteManager;
