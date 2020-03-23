"use strict";

class StoreUser {
  get validateAll() {
    return true;
  }

  get rules() {
    const id = this.ctx.params.id;

    let validations = {
      name: "required",
      email: "required|unique:users" + (id ? `,email,id` : "")
    };

    if (!id) {
      validations = {
        ...validations,
        password: "required|min:6"
      };
    }

    return validations;
  }

  get messages() {
    return {
      "name.required": "O nome é obrigatório",

      "email.required": "O email é obrigatório",
      "email.unique": "O email do grupo precisa ser único",

      "password.required": "A senha é obrigatória",
      "password.min": "A senha precisa ter no mínimo 6 caracteres"
    };
  }
}

module.exports = StoreUser;
