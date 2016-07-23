'use strict';

angular.module('companyFoodDeliveryApp', ['companyFoodDeliveryApp.auth',
    'companyFoodDeliveryApp.admin', 'companyFoodDeliveryApp.constants', 'ngCookies', 'ngResource',
    'ngSanitize', 'btford.socket-io', 'ui.router', 'ui.bootstrap', 'validation.match', 'smart-table'
  ])
  .config(function($urlRouterProvider, $locationProvider) {
    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  });
