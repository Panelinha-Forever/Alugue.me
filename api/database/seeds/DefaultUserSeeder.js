"use strict";

const User = use("App/Models/User");
const Role = use("Adonis/Acl/Role");
const Permission = use("Adonis/Acl/Permission");

/*
|--------------------------------------------------------------------------
| DefaultUserSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

class DefaultUserSeeder {
  async createDefaultUser() {
    let defaultUser = await User.query()
      .where("email", "=", "ti@alugueme.info")
      .first();
    const roleAdmin = await Role.query()
      .where("slug", "=", "admin")
      .first();
    const roleUser = await Role.query()
      .where("slug", "=", "user")
      .first();

    if (!defaultUser) {
      defaultUser = new User();
      defaultUser.name = "default";
      defaultUser.email = "ti@alugueme.info";
      defaultUser.password = "a1s2d3f4";

      await defaultUser.save();
      await defaultUser.roles().attach([roleAdmin.id, roleUser.id]);
    }

    return defaultUser;
  }

  async run() {
    await this.createDefaultUser();
  }
}

module.exports = DefaultUserSeeder;
