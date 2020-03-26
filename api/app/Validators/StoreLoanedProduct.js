"use strict";

const Validator = use("Validator");

const ProductType = use("App/Models/ProductType");

const existsFn = async (data, field, message, args, get) => {
  const product_type_id = get(data, field);

  if (!product_type_id) {
    return;
  }

  const productType = await ProductType.find(product_type_id);

  if (!productType) {
    throw message;
  }
};

Validator.extend("exists", existsFn);

class StoreLoanedProduct {
  get validateAll() {
    return true;
  }

  get rules() {
    return {
      name: "required",
      description: "required",
      daily_value: "required",
      brand: "required",
      model: "required",

      product_type_id: "required|exists"
    };
  }

  get messages() {
    return {
      "name.required": "O nome é obrigatório",

      "description.required": "A descrição é obrigatória",

      "daily_value.required": "O valor diário é obrigatório",

      "brand.required": "A marca é obrigatória",

      "model.required": "O modelo é obrigatório",

      "product_type_id.required": "O tipo de produto é obrigatório",
      "product_type_id.exists":
        "O tipo de produto precisa estar cadastrado no banco de dados"
    };
  }
}

module.exports = StoreLoanedProduct;
