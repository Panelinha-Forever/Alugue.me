"use strict";

const User = use("App/Models/User");
const Address = use("App/Models/Address");

class UserController {
  async index({ request, response, transform }) {
    const page = request.get().page || 1;
    const perPage = request.get().perPage || 10;

    return transform.paginate(
      await User.query().paginate(page, perPage),
      "UserTransformer"
    );
  }

  async show({ params, transform }) {
    const user = await User.findOrFail(params.id);

    return transform.item(user, "UserTransformer");
  }

  async store({ request, transform }) {
    const userData = request.only(User.fillable());

    const addressData = request.only(Address.fillable());

    const address = await Address.create(addressData);

    const user = await User.create({
      ...userData,
      address_id: address.id
    });

    return transform.item(user, "UserTransformer");
  }

  async update({ request, params, transform }) {
    let user = await User.findOrFail(params.id);
    const userData = request.only(User.fillable());

    user.merge(userData);
    user.merge(userData);

    await user.save();

    return transform.item(user, "UserTransformer");
  }

  async destroy({ params }) {
    const user = await User.findOrFail(params.id);

    await user.delete();
  }
}

module.exports = UserController;
