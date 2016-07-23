'use strict';

angular.module('companyFoodDeliveryApp.auth', ['companyFoodDeliveryApp.constants',
    'companyFoodDeliveryApp.util', 'ngCookies', 'ui.router'
  ])
  .config(function($httpProvider) {
    $httpProvider.interceptors.push('authInterceptor');
  });
