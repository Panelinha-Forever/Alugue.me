"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

class LoanedProductTransformer extends BumblebeeTransformer {
  static get defaultInclude() {
    return ["user", "product"];
  }

  async transform(model) {
    return {
      id: model.id,
      quantity: model.quantity,
      total_value: model.total_value,
      start_date: model.start_date,
      end_date: model.end_date
    };
  }

  includeUser(model) {
    return this.item(model.getRelated("user"), "UserTransformer");
  }

  includeProduct(model) {
    return this.item(model.getRelated("product"), "ProductTransformer");
  }
}

module.exports = LoanedProductTransformer;
