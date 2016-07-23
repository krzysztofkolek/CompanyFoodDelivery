'use strict';

describe('Component: EmployeesComponent', function () {

  // load the controller's module
  beforeEach(module('companyFoodDeliveryApp'));

  var EmployeesComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    EmployeesComponent = $componentController('employees', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
