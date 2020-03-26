"use strict";

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use("Schema");

class DropDescriptionFromProductTypesSchema extends Schema {
  up() {
    this.table("product_types", table => {
      // alter table
      table.dropColumn("description");
    });
  }

  down() {
    this.table("product_types", table => {
      // reverse alternations
    });
  }
}

module.exports = DropDescriptionFromProductTypesSchema;
