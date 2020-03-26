"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

class ProductTransformer extends BumblebeeTransformer {
  static get defaultInclude() {
    return ["user", "productType"];
  }

  async transform(model) {
    return {
      id: model.id,
      name: model.name,
      description: model.description,
      daily_value: model.daily_value,
      brand: model.brand,
      model: model.model,
      url_image: model.url_image,
      status: model.status
    };
  }

  includeUser(model) {
    return this.item(model.getRelated("user"), "UserTransformer");
  }

  includeProductType(model) {
    return this.item(model.getRelated("productType"), "ProductTypeTransformer");
  }
}

module.exports = ProductTransformer;
