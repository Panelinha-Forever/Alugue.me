"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class AddProductIdToProductStorageSchema extends Schema {
  up() {
    this.table("product_storages", table => {
      // alter table

      table
        .integer("product_id")
        .unsigned()
        .index();
      table
        .foreign("product_id")
        .references("id")
        .on("products")
        .onDelete("cascade");
    });
  }

  down() {
    this.table("product_storages", table => {
      // reverse alternations
    });
  }
}

module.exports = AddProductIdToProductStorageSchema;
