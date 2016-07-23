'use strict';

(function(){

class RetailersComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('companyFoodDeliveryApp')
  .component('retailers', {
    templateUrl: 'app/retailers/retailers.html',
    controller: RetailersComponent,
    controllerAs: 'retailersCtrl'
  });

})();
