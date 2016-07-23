'use strict';

angular.module('companyFoodDeliveryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('retailers', {
        url: '/retailers',
        template: '<retailers></retailers>'
      });
  });
