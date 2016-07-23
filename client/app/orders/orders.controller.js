'use strict';

(function(){

class OrdersComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('companyFoodDeliveryApp')
  .component('orders', {
    templateUrl: 'app/orders/orders.html',
    controller: OrdersComponent,
    controllerAs: 'ordersCtrl'
  });

})();
