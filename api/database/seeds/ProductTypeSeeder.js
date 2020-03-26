"use strict";

/*
|--------------------------------------------------------------------------
| ProductTypeSeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");
const ProductType = use("App/Models/ProductType");

class ProductTypeSeeder {
  async run() {
    // 1	Eletrônicos	2020-03-26 14:34:18	2020-03-26 14:34:18
    // 2	Casa	2020-03-26 14:34:18	2020-03-26 14:34:18
    // 3	Jardim	2020-03-26 14:34:18	2020-03-26 14:34:18
    // 4	Fotografia	2020-03-26 14:34:18	2020-03-26 14:34:18

    const productTypes = [
      {
        category_type_id: 1,
        name: "Video Game"
      },
      {
        category_type_id: 4,
        name: "Máquina fotográfica"
      },
      {
        category_type_id: 3,
        name: "Cortador de grama"
      }
    ];

    await ProductType.createMany(productTypes);
  }
}

module.exports = ProductTypeSeeder;
