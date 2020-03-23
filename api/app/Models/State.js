"use strict";

/** @type {typeof import('@adonisjs/lucid/src/Lucid/Model')} */
const Model = use("Model");

class State extends Model {
  static boot() {
    super.boot();
  }

  static fillable() {
    return ["name", "initials"];
  }
}

module.exports = State;
