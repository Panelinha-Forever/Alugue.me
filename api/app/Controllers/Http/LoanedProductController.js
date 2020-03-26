"use strict";

const LoanedProduct = use("App/Models/LoanedProduct");
const Product = use("App/Models/Product");

class LoanedProductController {
  async index({ request, response, transform }) {
    const page = request.get().page || 1;
    const perPage = request.get().perPage || 10;

    return transform.paginate(
      await LoanedProduct.query().paginate(page, perPage),
      "LoanedProductTransformer"
    );
  }

  async show({ params, transform }) {
    const loanedProduct = await Product.findOrFail(params.id);

    return transform.item(loanedProduct, "LoanedProductTransformer");
  }

  async store({ auth, request, transform }) {
    // return ["product_id", "quantity", "start_date", "end_date"];

    const loanedProductData = request.only(LoanedProduct.fillable());

    const product = await Product.findOrFail(loanedProductData.product_id);

    const totalValue = +loanedProductData.quantity * product.daily_value;

    const loanedProduct = await LoanedProduct.create({
      ...loanedProductData,
      user_id: auth.user.id,
      total_value: totalValue
    });

    return transform.item(loanedProduct, "LoanedProductTransformer");
  }

  async update({ request, params, transform }) {
    let loanedProduct = await Product.findOrFail(params.id);
    const loanedProductData = request.only(LoanedProduct.fillable());

    const product = await loanedProduct.product();

    const totalValue = +quantity * product.daily_value;

    loanedProduct.merge({ loanedProductData, total_value: totalValue });

    await loanedProduct.save();

    return transform.item(product, "LoanedProductTransformer");
  }

  async destroy({ params }) {
    const loanedProduct = await LoanedProduct.findOrFail(params.id);
    await loanedProduct.delete();
  }
}

module.exports = LoanedProductController;
