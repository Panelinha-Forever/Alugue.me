"use strict";

const ModelFilter = use("ModelFilter");

class UserFilter extends ModelFilter {
  id(id) {
    return this.where("id", +id);
  }

  name(name) {
    return this.whereRaw(
      "LOWER(name) like LOWER(?)",
      "%" + name.trim().toLowerCase() + "%"
    );
  }

  email(email) {
    return this.whereRaw(
      "LOWER(email) like LOWER(?)",
      "%" + email.trim().toLowerCase() + "%"
    );
  }
}

module.exports = UserFilter;
