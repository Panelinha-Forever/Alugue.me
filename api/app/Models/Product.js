"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

const ProductFilter = use("App/ModelFilters/ProductFilter");

class Product extends Model {
  static boot() {
    super.boot();

    this.addTrait("@provider:Filterable", ProductFilter);
  }

  static fillable() {
    return [
      "name",
      "description",
      "daily_value",
      "brand",
      "model",
      "product_type_id"
    ];
  }

  city() {
    return this.hasOne("App/Models/City", "city_id", "id");
  }

  user() {
    return this.hasOne("App/Models/User", "user_id", "id");
  }

  productType() {
    return this.hasOne("App/Models/ProductType", "product_type_id", "id");
  }
}

module.exports = Product;
