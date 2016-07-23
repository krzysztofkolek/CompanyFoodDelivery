'use strict';

angular.module('companyFoodDeliveryApp')
  .config(function ($stateProvider) {
    $stateProvider
      .state('projects', {
        url: '/projects',
        template: '<projects></projects>'
      });
  });
