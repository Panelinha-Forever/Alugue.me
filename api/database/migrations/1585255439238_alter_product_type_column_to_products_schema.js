"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AlterProductTypeColumnToProductsSchema extends Schema {
  up() {
    this.table("products", table => {
      // alter table

      table.dropColumn("product_type");

      table
        .integer("product_type_id")
        .unsigned()
        .index();
      table
        .foreign("product_type_id")
        .references("id")
        .on("product_types")
        .onDelete("cascade");
    });
  }

  down() {
    this.table("products", table => {
      // reverse alternations
    });
  }
}

module.exports = AlterProductTypeColumnToProductsSchema;
