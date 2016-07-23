'use strict';

(function(){

class ProjectsComponent {
  constructor() {
    this.message = 'Hello';
  }
}

angular.module('companyFoodDeliveryApp')
  .component('projects', {
    templateUrl: 'app/projects/projects.html',
    controller: ProjectsComponent,
    controllerAs: 'projectsCtrl'
  });

})();
