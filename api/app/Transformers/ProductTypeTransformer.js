"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

class ProductTypeTransformer extends BumblebeeTransformer {
  async transform(model) {
    return model;
  }
}

module.exports = ProductTypeTransformer;
