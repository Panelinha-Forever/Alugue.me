"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateCategoryTypeSchema extends Schema {
  up() {
    this.create("category_types", table => {
      table.increments();

      table.string("name");

      table.timestamps();
    });
  }

  down() {
    this.drop("category_types");
  }
}

module.exports = CreateCategoryTypeSchema;
