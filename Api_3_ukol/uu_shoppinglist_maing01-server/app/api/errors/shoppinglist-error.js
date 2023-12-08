"use strict";

const ShoppinglistMainUseCaseError = require("./shoppinglist-main-use-case-error.js");
const SHOPPINGLIST_ERROR_PREFIX = `${ShoppinglistMainUseCaseError.ERROR_PREFIX}shoppinglist/`;

const Create = {
  UC_CODE: `${SHOPPINGLIST_ERROR_PREFIX}create/`,

  InvalidDtoIn: class extends ShoppinglistMainUseCaseError {
    constructor() {
      super(...arguments);
      this.code = `${Create.UC_CODE}invalidDtoIn`;
      this.message = "DtoIn is not valid.";
    }
  
},
  
ShoppinglistDaoCreateFailed: class extends ShoppinglistMainUseCaseError {
  constructor() {
    super(...arguments);
    this.code = `${Create.UC_CODE}settingsDaoCreateFailed`;
    this.message = "Create failed.";
  }
},

};


module.exports = {
  Create
};
