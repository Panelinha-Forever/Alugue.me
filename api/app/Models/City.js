"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class City extends Model {
  static boot() {
    super.boot();
  }

  static fillable() {
    return ["name"];
  }

  state() {
    return this.belongsTo("App/Models/State", "state_id", "id");
  }
}

module.exports = City;
