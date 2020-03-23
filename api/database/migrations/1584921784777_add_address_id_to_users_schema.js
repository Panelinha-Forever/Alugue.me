"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddAddressIdToUsersSchema extends Schema {
  up() {
    this.table("users", table => {
      // alter table

      table
        .integer("address_id")
        .unsigned()
        .index();
      table
        .foreign("address_id")
        .references("id")
        .on("addresses")
        .onDelete("cascade");
    });
  }

  down() {
    this.table("users", table => {
      // reverse alternations
    });
  }
}

module.exports = AddAddressIdToUsersSchema;
