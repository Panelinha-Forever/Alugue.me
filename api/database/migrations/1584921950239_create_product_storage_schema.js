"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class CreateProductStorageSchema extends Schema {
  up() {
    this.create("product_storages", table => {
      table.increments();

      table.integer("quantity");

      table.timestamps();
    });
  }

  down() {
    this.drop("product_storages");
  }
}

module.exports = CreateProductStorageSchema;
