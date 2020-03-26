"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateLoanedProductSchema extends Schema {
  up() {
    this.create("loaned_products", table => {
      table.increments();

      table
        .integer("user_id")
        .unsigned()
        .index();
      table
        .foreign("user_id")
        .references("id")
        .on("users")
        .onDelete("cascade");

      table
        .integer("product_id")
        .unsigned()
        .index();
      table
        .foreign("product_id")
        .references("id")
        .on("products")
        .onDelete("cascade");

      table.integer("quantity");
      table.string("total_value");
      table.datetime("start_date");
      table.datetime("end_date");

      table.timestamps();
    });
  }

  down() {
    this.drop("loaned_products");
  }
}

module.exports = CreateLoanedProductSchema;
