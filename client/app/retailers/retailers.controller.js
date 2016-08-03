'use strict';

(function () {

    class RetailersComponent {
        constructor($http, $scope, socket) {
            this.apiUrl = '/api/retailerss/';
            
            this.$http = $http;
            this.$scope = $scope;
            
            this.retailers = [];
            
            this.$scope.$on('$destroy', function() {
                socket.unsyncUpdates('retailers');
            })
        }
        
        $onInit() {
            this.$http.get(this.apiUrl)
                .then(response => {
                   this.retailers = response.data;
                   this.socket.syncUpdates(this.apiUrl, this.retailers);                    
                });
        }
    }

    angular.module('companyFoodDeliveryApp')
        .component('retailers', {
            templateUrl: 'app/retailers/retailers.html',
            controller: RetailersComponent,
            controllerAs: 'retailersCtrl'
        });

})();
