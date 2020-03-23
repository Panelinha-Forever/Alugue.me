"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateProductTypeSchema extends Schema {
  up() {
    this.create("product_types", table => {
      table.increments();

      table
        .integer("category_type_id")
        .unsigned()
        .index();
      table
        .foreign("category_type_id")
        .references("id")
        .on("category_types")
        .onDelete("cascade");

      table.string("name");

      table.string("description");

      table.timestamps();
    });
  }

  down() {
    this.drop("product_types");
  }
}

module.exports = CreateProductTypeSchema;
