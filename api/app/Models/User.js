"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

/** @type {import('@adonisjs/framework/src/Hash')} */
const Hash = use("Hash");

const UserFilter = use("App/ModelFilters/UserFilter");

class User extends Model {
  static get traits() {
    return [
      "@provider:Adonis/Acl/HasRole",
      "@provider:Adonis/Acl/HasPermission"
    ];
  }

  static fillable() {
    return ["name", "email", "password"];
  }

  static boot() {
    super.boot();

    /**
     * A hook to hash the user password before saving
     * it to the database.
     */

    this.addTrait("@provider:Filterable", UserFilter);

    this.addHook("beforeSave", async userInstance => {
      if (userInstance.dirty.password) {
        userInstance.password = await Hash.make(userInstance.password);
      }
    });
  }

  /**
   * A relationship on tokens is required for auth to
   * work. Since features like `refreshTokens` or
   * `rememberToken` will be saved inside the
   * tokens table.
   *
   * @method tokens
   *
   * @return {Object}
   */
  tokens() {
    return this.hasMany("App/Models/Token");
  }

  address() {
    return this.belongsTo("App/Models/Address", "address_id", "id");
  }
}

module.exports = User;
