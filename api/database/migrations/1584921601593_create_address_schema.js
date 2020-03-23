"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddressSchema extends Schema {
  up() {
    this.create("addresses", table => {
      table.increments();

      table.string("street");

      table.string("number");
      table.string("postal_code");

      table
        .integer("city_id")
        .unsigned()
        .index();
      table
        .foreign("city_id")
        .references("id")
        .on("cities")
        .onDelete("cascade");

      table.timestamps();
    });
  }

  down() {
    this.drop("addresses");
  }
}

module.exports = AddressSchema;
