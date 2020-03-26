"use strict";

/** .type {typeof import('.adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");

Route.group(() => {
  Route.resource("/users", "UserController").validator(
    new Map([
      [["/users.store"], ["StoreUser"]],
      [["/users.update"], ["StoreUser"]]
    ])
  );

  Route.resource("/products", "ProductController").validator(
    new Map([
      [["/products.store"], ["StoreProduct"]],
      [["/products.update"], ["StoreProduct"]]
    ])
  );
})
  .prefix("api/v1")
  .middleware(["auth"]);
