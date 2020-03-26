"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

// const LoanedProductFilter = use("App/ModelFilters/LoanedProductFilter");

class LoanedProduct extends Model {
  static boot() {
    super.boot();

    // this.addTrait("@provider:Filterable", LoanedProductFilter);
  }

  static fillable() {
    return ["product_id", "quantity", "start_date", "end_date"];
  }

  product() {
    return this.hasOne("App/Models/Product", "product_id", "id");
  }

  user() {
    return this.hasOne("App/Models/User", "user_id", "id");
  }
}

module.exports = LoanedProduct;
