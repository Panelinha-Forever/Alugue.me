"use strict";

/*
|--------------------------------------------------------------------------
| CategoryTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const CategoryType = use("App/Models/CategoryType");

class CategoryTypeSeeder {
  async run() {
    const categoriesTypes = [
      {
        name: "Eletrônicos"
      },
      {
        name: "Casa"
      },
      {
        name: "Jardim"
      },
      {
        name: "Fotografia"
      }
    ];

    await CategoryType.createMany(categoriesTypes);
  }
}

module.exports = CategoryTypeSeeder;
