'use strict';

angular.module('companyFoodDeliveryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('orders', {
        url: '/orders',
        template: '<orders></orders>'
      });
  });
