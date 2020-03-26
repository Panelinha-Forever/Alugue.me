"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class ProductType extends Model {
  static boot() {
    super.boot();
  }

  categoryType() {
    return this.belongsTo("App/Models/CategoryType", "category_type_id", "id");
  }
}

module.exports = ProductType;
