'use strict';

(function(){

class EmployeesComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('companyFoodDeliveryApp')
  .component('employees', {
    templateUrl: 'app/employees/employees.html',
    controller: EmployeesComponent,
    controllerAs: 'employeesCtrl'
  });

})();
