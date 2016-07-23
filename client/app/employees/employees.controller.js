'use strict';

(function(){

class EmployeesComponent {
  constructor() { 
  }
}

angular.module('companyFoodDeliveryApp')
  .component('employees', {
    templateUrl: 'app/employees/employees.html',
    controller: EmployeesComponent,
    controllerAs: 'employeesCtrl'
  });

})();
