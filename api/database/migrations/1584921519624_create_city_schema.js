"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateCitySchema extends Schema {
  up() {
    this.create("cities", table => {
      table.increments();
      table.string("name");

      table
        .integer("state_id")
        .unsigned()
        .index();
      table
        .foreign("state_id")
        .references("id")
        .on("states")
        .onDelete("cascade");

      table.timestamps();
    });
  }

  down() {
    this.drop("cities");
  }
}

module.exports = CreateCitySchema;
