'use strict';

describe('Component: ProjectsComponent', function () {

  // load the controller's module
  beforeEach(module('companyFoodDeliveryApp'));

  var ProjectsComponent;

  // Initialize the controller and a mock scope
  beforeEach(inject(function ($componentController) {
    ProjectsComponent = $componentController('projects', {});
  }));

  it('should ...', function () {
    expect(1).toEqual(1);
  });
});
