"use strict";

/*
|--------------------------------------------------------------------------
| StateCitySeeder
|--------------------------------------------------------------------------
|
| Make use of the Factory instance to seed database with dummy data or
| make use of Lucid models directly.
|
*/

/** @type {import('@adonisjs/lucid/src/Factory')} */
const Factory = use("Factory");

const State = use("App/Models/State");
const City = use("App/Models/City");

class StateCitySeeder {
  async run() {
    const statesData = [
      {
        name: "São Paulo",
        initials: "SP"
      },
      {
        name: "Rio de Janeiro",
        initials: "RJ"
      }
    ];

    const citiesData = [
      {
        name: "São Paulo",
        state_id: 1
      },
      {
        name: "Campinas",
        state_id: 1
      },
      {
        name: "Vinhedo",
        state_id: 1
      }
    ];

    await State.createMany(statesData);
    await City.createMany(citiesData);
  }
}

module.exports = StateCitySeeder;
