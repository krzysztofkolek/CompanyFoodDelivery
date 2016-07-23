'use strict';

angular.module('companyFoodDeliveryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('employees', {
        url: '/employees',
        template: '<employees></employees>'
      });
  });
