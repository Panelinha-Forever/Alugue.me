"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

class UserTransformer extends BumblebeeTransformer {
  // static get defaultInclude() {
  //   return ["address"];
  // }

  async transform(model) {
    return {
      name: model.name,
      email: model.email
    };
  }

  // includeAddress(model) {
  //   return this.item(model.getRelated("address"), "AddressTransformer");
  // }
}

module.exports = UserTransformer;
