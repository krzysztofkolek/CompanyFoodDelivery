'use strict';

(function () {

    class EmployeesComponent {
        
        constructor($http, $scope, socket) {
            this.apiUrl = '/api/users';
            
            this.$http = $http;
            this.socket = socket;
            
            this.employees = [];
            $scope.$on('$destroy', function () {
               socket.unsyncUpdates('employess'); 
            });
        }
        
        $onInit() {
            this.$http.get(this.apiUrl)
                .then(response => {
                    this.employees = response.data;
                    this.socket.syncUpdates('employeess', this.employees);    
                }); 
        }
        
        addUser() {
            if(this.newUser) {
                this.$http.post(this.apiUrl, {
                    
                });
                this.newUser = ''; 
            }
        }
        
        deleteUser(user) {
            this.$http.delete(this.apiUrl + user._id);
        }
    }


    angular.module('companyFoodDeliveryApp')
        .component('employees', {
            templateUrl: 'app/employees/employees.html',
            controller: EmployeesComponent,
            controllerAs: 'employeesCtrl'
        });

})();
