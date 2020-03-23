"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

class AddressTransformer extends BumblebeeTransformer {
  static get defaultInclude() {
    return ["city"];
  }

  async transform(model) {
    return {
      street: model.street,
      number: model.number,
      postal_code: model.postal_code
    };
  }

  includeCity(model) {
    return this.item(model.getRelated("city"), "CityTransformer");
  }
}

module.exports = AddressTransformer;
