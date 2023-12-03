"use strict";
const ShoppinglistAbl = require("../../abl/shoppinglist-abl.js");

class ShoppinglistController {

  create(ucEnv) {
    return ShoppinglistAbl.create(ucEnv.getUri().getAwid(), ucEnv.getSession(), ucEnv.getDtoIn());
  }

}

module.exports = new ShoppinglistController();
