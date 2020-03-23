"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

class CityTransformer extends BumblebeeTransformer {
  static get defaultInclude() {
    return ["state"];
  }

  async transform(model) {
    return {
      name: model.name
    };
  }

  includeState(model) {
    return this.item(model.getRelated("state"), "StateTransformer");
  }
}

module.exports = CityTransformer;
