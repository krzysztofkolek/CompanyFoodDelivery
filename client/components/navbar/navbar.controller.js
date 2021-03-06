'use strict';

class NavbarController {
  //end-non-standard

  //start-non-standard
  constructor(Auth) {
    this.isLoggedIn = Auth.isLoggedIn;
    this.isAdmin = Auth.isAdmin;
    this.getCurrentUser = Auth.getCurrentUser;
  };
  
  isLoggedInButNotAdmin(Auth) {
      return !Auth.isAdmin && Auth.isLoggedIn;
  }

}

angular.module('companyFoodDeliveryApp')
  .controller('NavbarController', NavbarController);
