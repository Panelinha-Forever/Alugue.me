"use strict";

const Role = use("Adonis/Acl/Role");
const Permission = use("Adonis/Acl/Permission");

/*
|--------------------------------------------------------------------------
| RoleSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */

class RoleSeeder {
  async createRole(name) {
    let role = await Role.query()
      .where("slug", "=", name)
      .first();
    if (!role) {
      role = new Role();
      role.name = name;
      role.slug = name;
      role.description = name;
      await role.save();
    }

    return role;
  }

  async createPermission(name) {
    let permission = await Permission.query()
      .where("slug", "=", name)
      .first();
    if (!permission) {
      permission = new Permission();
      permission.slug = name;
      permission.name = name;
      permission.description = name;
      await permission.save();
    }

    return permission;
  }

  async generatePermissions(name) {
    let permissions = {};
    let pType = ["list", "create", "edit", "delete"];
    for (let i = 0; i < 4; i++) {
      permissions[pType[i]] = await this.createPermission(
        pType[i] + "_" + name
      );
    }

    return permissions;
  }

  async addPermissions(types, role, permissions) {
    if (!types) {
      types = ["list", "create", "edit", "delete"];
    }

    for (let i = 0; i < types.length; i++) {
      await role.permissions().attach([permissions[types[i]].id]);
    }
  }

  async run() {
    //roles
    const adminRole = await this.createRole("admin");
    const userRole = await this.createRole("user");

    //permissions
    const users = await this.generatePermissions("user");
    const aux = await this.generatePermissions("aux");

    //add permissions

    //admin
    await this.addPermissions(null, adminRole, users);
    await this.addPermissions(null, adminRole, aux);
  }
}

module.exports = RoleSeeder;
