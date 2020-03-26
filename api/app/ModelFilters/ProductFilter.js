"use strict";

const ModelFilter = use("ModelFilter");

class ProductFilter extends ModelFilter {
  id(id) {
    return this.where("id", +id);
  }

  name(name) {
    return this.whereRaw(
      "LOWER(name) like LOWER(?)",
      "%" + name.trim().toLowerCase() + "%"
    );
  }
}

module.exports = ProductFilter;
