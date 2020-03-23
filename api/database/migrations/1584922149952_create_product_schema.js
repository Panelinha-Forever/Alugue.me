"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateProductSchema extends Schema {
  up() {
    this.create("products", table => {
      table.increments();

      table
        .integer("product_type")
        .unsigned()
        .index();
      table
        .foreign("product_type")
        .references("id")
        .on("product_types")
        .onDelete("cascade");

      table
        .integer("user_id")
        .unsigned()
        .index();
      table
        .foreign("user_id")
        .references("id")
        .on("users")
        .onDelete("cascade");

      table.string("name");
      table.string("description");
      table.string("daily_value");
      table.string("brand");
      table.string("model");
      table.string("url_image");
      table.boolean("status");

      table.timestamps();
    });
  }

  down() {
    this.drop("products");
  }
}

module.exports = CreateProductSchema;
