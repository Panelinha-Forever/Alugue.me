"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateStateSchema extends Schema {
  up() {
    this.create("states", table => {
      table.increments();
      table.string("name");
      table.string("initials");
      table.timestamps();
    });
  }

  down() {
    this.drop("states");
  }
}

module.exports = CreateStateSchema;
