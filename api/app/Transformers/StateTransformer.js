"use strict";

const BumblebeeTransformer = use("Bumblebee/Transformer");

class StateTransformer extends BumblebeeTransformer {
  async transform(model) {
    return {
      name: model.name,
      initials: model.initials
    };
  }
}

module.exports = StateTransformer;
