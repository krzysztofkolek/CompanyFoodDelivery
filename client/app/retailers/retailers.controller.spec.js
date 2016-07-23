'use strict';

describe('Component: RetailersComponent', function () {

  // load the controller's module
  beforeEach(module('companyFoodDeliveryApp'));

  var RetailersComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    RetailersComponent = $componentController('retailers', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
