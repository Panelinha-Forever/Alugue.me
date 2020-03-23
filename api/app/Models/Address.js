"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

// const AddressFilter = use("App/ModelFilters/AddressFilter");

class Address extends Model {
  static boot() {
    super.boot();

    // this.addTrait("@provider:Filterable", AddressFilter);
  }

  static fillable() {
    return ["street", "number", "city_id", "postal_code"];
  }

  city() {
    return this.hasOne("App/Models/City", "city_id", "id");
  }
}

module.exports = Address;
