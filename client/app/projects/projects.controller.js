'use strict';

(function () {

    class ProjectsComponent {
        constructor($http, $scope, socket) {
            this.apiUrl = '/api/projectss/';
            
            this.$http = $http;
            this.socket = socket;
            
            this.projects = [];
            
            $scope.$on('$destroy', function() {
                socket.unsyncUpdates('projects');
            })
        }
        
        $onInit() {
            this.$http.get(this.apiUrl)
                .then(response => {
                    this.projects = response.data;
                    this.socket.syncUpdates(this.apiUrl, this.projects);
                })
        }
    }

    angular.module('companyFoodDeliveryApp')
        .component('projects', {
            templateUrl: 'app/projects/projects.html',
            controller: ProjectsComponent,
            controllerAs: 'projectsCtrl'
        });

})();
